# Desafio backend 

- O teste deve ser realizado com NodeJS.
- Não é obrigatório o uso de Typescript, ORM ou Query Builder, 
    mas será diferencial se usado.


# Credenciais de acesso ao Banco de dados
    
Credenciais de acesso:

    SQL SERVER
    Server: 191.239.240.59
    Port: 11433
    User: testeVereda
    Pass: Vereda99


Steps
    
    -Configuração inicial do servidor
    - Deve ser utilizado dotenv no projeto
    - Deve ter código limpo
    - Pode ser utilizado Express ou qualquer outro framework para subir o servidor


Regras


    Endpoint para validar se o aluno foi reprovado ou não
    Todas as rotas devem ter um status code de erro ou sucesso
    Utilizar logicas que query params e query string nas buscas de url
    Notas valem até 10	
    Média simples das notas dos 3 trimestres Nota Final = (AV1 + AV2 + AV3) / 3	
    Se a nota ficou abaixo de 6 faz a Recuperação Nota Pós Rec = ( Nota Final + 2 * REC ) / 3	
    Disciplinas: do 9º ano 1º EM não tem ciências e tem química, física e biologia	
    1º EM não tem Arte	
