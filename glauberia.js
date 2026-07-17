// JavaScript Compartilhado - GlauberIA

// Toggle do Menu Mobile (Drawer)
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.toggle('open');
    overlay.classList.toggle('open');
  }
}

// Fechar drawer ao mudar de rota ou redimensionar
window.addEventListener('resize', () => {
  if (window.innerWidth > 992) {
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    if (drawer && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
    }
  }
});

// Troca de Abas (para index.html e páginas com tabs)
function switchTab(tabId) {
  // Remove classe ativa de todas as abas e botões
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
    button.setAttribute('aria-selected', 'false');
  });

  // Ativa a aba e o botão correspondente
  const activeContent = document.getElementById(`tab-${tabId}`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  // Encontra o botão que chamou
  const activeBtn = Array.from(document.querySelectorAll('.tab-button')).find(btn => 
    btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(`'${tabId}'`)
  );
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.setAttribute('aria-selected', 'true');
  }
}

// Função Utilitária para Copiar Prompt para a Área de Transferência
function copyPrompt(text, button) {
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg style="width:14px;height:14px;fill:currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
      Copiado!
    `;
    button.style.background = '#38a169'; // Verde temporário
    button.style.color = '#ffffff';
    button.style.borderColor = '#38a169';
    
    setTimeout(() => {
      button.innerHTML = originalHTML;
      button.style.background = '';
      button.style.color = '';
      button.style.borderColor = '';
    }, 2000);
  }).catch(err => {
    console.error('Falha ao copiar o texto: ', err);
  });
}

// Efeito de sombra e blur no Navbar ao rolar a página
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.top-navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
      navbar.style.backdropFilter = 'blur(10px)';
      navbar.style.background = 'rgba(33, 33, 33, 0.95)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.backdropFilter = 'none';
      navbar.style.background = 'var(--navbar-bg, #212121)';
    }
  }
});

// Alternar Tema Noturno/Claro
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  let newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Atualizar ícones dos toggles
  updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
  const icons = document.querySelectorAll('.theme-toggle-icon');
  icons.forEach(icon => {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
}

// Inicializar ícones ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateThemeIcons(currentTheme);
});
