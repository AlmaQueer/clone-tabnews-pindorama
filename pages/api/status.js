function status(request, response) {
  response
    .status(200)
    .send("Alunos do pindorama.dev.br são alunos acima da média");
}

export default status;
