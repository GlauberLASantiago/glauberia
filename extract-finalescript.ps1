$html = Get-Content -Raw "$env:TEMP\finalescript_ref.html"
$pat = '<a class="[^"]*dropDownHotspotFScommand[^"]*"[^>]*>(?:<img[^>]*>)?([^<]+)</a>'
$matches = [regex]::Matches($html, $pat)
function Convert-HtmlText([string]$source) {
  $source = [regex]::Replace($source, '<br\s*/?>', "`n", 'IgnoreCase')
  $source = [regex]::Replace($source, '</li>', "`n", 'IgnoreCase')
  $source = [regex]::Replace($source, '<[^>]+>', '')
  $source = [System.Net.WebUtility]::HtmlDecode($source)
  return ([regex]::Replace($source, '[ \t]+', ' ')).Trim()
}
function Get-Section([string]$body, [string]$name) {
  $match = [regex]::Match($body, '<h4>' + [regex]::Escape($name) + '</h4>(.*?)(?=<h4>|</div>)', 'Singleline,IgnoreCase')
  if (-not $match.Success) { return @() }
  $codes = [regex]::Matches($match.Groups[1].Value, '<code>(.*?)</code>', 'Singleline,IgnoreCase') | ForEach-Object { Convert-HtmlText $_.Groups[1].Value }
  if ($codes.Count) { return @($codes) }
  $text = Convert-HtmlText $match.Groups[1].Value
  if (!$text -or $text -eq '(none)') { return @() }
  return @($text)
}
$items = @()
for ($i = 0; $i -lt $matches.Count; $i++) {
  $match = $matches[$i]
  $end = if ($i + 1 -lt $matches.Count) { $matches[$i + 1].Index } else { $html.Length }
  $chunk = $html.Substring($match.Index, $end - $match.Index)
  $name = Convert-HtmlText $match.Groups[1].Value
  $body = [regex]::Match($chunk, '<div class="MCDropDownBody dropDownBody">(.*)', 'Singleline').Groups[1].Value
  $description = Convert-HtmlText ([regex]::Match($body, '<p>(.*?)</p>', 'Singleline,IgnoreCase').Groups[1].Value)
  $items += [pscustomobject][ordered]@{ id=$i+1; name=$name; description=$description; synonyms=@(Get-Section $body 'Synonyms'); parameters=@(Get-Section $body 'Parameters'); examples=@(Get-Section $body 'Examples'); notes=@(Get-Section $body 'Notes') }
}
$json = $items | ConvertTo-Json -Depth 6 -Compress
Set-Content -Path 'finalescript-data.js' -Value ("window.FINALE_COMMANDS=" + $json + ";") -Encoding UTF8
Write-Output "Generated $($items.Count) commands, $((Get-Item 'finalescript-data.js').Length) bytes"
