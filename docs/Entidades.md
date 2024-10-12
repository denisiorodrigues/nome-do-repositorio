Entidades
  Produto
    ID - Unique
    Tamanho
    Cor
    Valor
    Preco

  Estoque
    ID
    ID produto
    Qtd minima
    Qtd Maxima

  Venda
    ID
    ID Produto
    Preco
    Data Venda

  ItenOrdens
    ID Produto
    Quantiade

  Ordem
    ID
    Tipo
    Itens (ItenOrdens)
    Valor

Caso de Uso
  Cadastrar Produto
  Cadastrar Estoque
  Incluir produto no estoque
  Envio de Notificação
  Realizar uma venda
    * Enviar um notificação estoque limitado
    * 
  
Funcionalidades 
  RF01 - Filtrar o histórico de vendas por ID, nome, tamanho, cor

Regras de Negócio
  RN01 - Envio de Notificação quando o produto atingir a quantidade mínima no estoque
  
  
  

