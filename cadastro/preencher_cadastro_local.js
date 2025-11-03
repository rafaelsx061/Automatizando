const { chromium } = require('playwright');
const path = require('path');

(async () => {
  console.log('🚀 Automatizando cadastro local');

  const filePath = path.resolve(__dirname, 'sistema_de_cadastro.html');
  const fileUrl = `file://${filePath}`;

  const browser = await chromium.launch({ headless: false, channel: 'chrome' });
  const page = await browser.newPage();

  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  console.log('📂 Página carregada:', fileUrl);

  // Preencher campos com pequenas pausas
  await page.fill('#nome', 'Rafael Oliveira');
  await page.waitForTimeout(1000); // 1 segundo

  await page.fill('#email', 'rafael2508@gmail.com');
  await page.waitForTimeout(1000);

  await page.fill('#cpf', '099.199.299-99');
  await page.waitForTimeout(1000);

  await page.fill('#telefone', '(61) 99117-8678');
  await page.waitForTimeout(1000);

  await page.fill('#cidade', 'Ceilândia - DF');
  await page.waitForTimeout(1000);

  // Clicar no botão de cadastro
  await page.click('text=Cadastrar'); 
  console.log('✅ Botão "Cadastrar" clicado automaticamente!');

// Clique no botão de Editar 
  await page.click('text=Editar');
  console.log('Botão "Editar" clicado automaticamente!');
  await page.waitForTimeout(1000);
  
  await page.fill('#nome', 'Rafael Pires');
  await page.waitForTimeout(2000); // 1 segundo

  await page.fill('#email', 'rafael2508@gmail.com');
  await page.waitForTimeout(2000);

  await page.fill('#cpf', '099.179.279-79');
  await page.waitForTimeout(2000);

  await page.fill('#telefone', '(61) 99997-8678');
  await page.waitForTimeout(2000);

  await page.fill('#cidade', 'Psul - DF');
  await page.waitForTimeout(2000);

  // Clicar novamente no botão "Cadastrar" para salvar edição
  await page.click('text=Cadastrar'); 
  console.log('✅ Edição finalizada e salva!');

  await page.waitForTimeout(3000);

  // ===== EXCLUSÃO =====
  await page.click('text=Excluir'); // ou '#btnExcluir' se tiver id
  console.log('🗑 Usuário excluído!');
  await page.waitForTimeout(2000);

  await browser.close();
  console.log('👋 Automação completa.');
})();
