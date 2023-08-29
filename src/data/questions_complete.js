const data = [
  {
    category: 'HTML',
    questions: [
      {
        question: 'Qual tag cria um parágrafo?',
        options: ['<p>', '<h1>', '<text>', '<ul>'],
        answer: '<p>',
        tip: 'É uma tag de uma letra apenas',
      },
      {
        question: 'Qual atributo adiciona um link para a tag a?',
        options: ['alt', 'href', 'src', 'link'],
        answer: 'href',
        tip: 'Hyperlink Reference',
      },
      {
        question: 'As listas não ordenadas tem a tag de:',
        options: ['<ol>', '<ul>', '<li>', '<list>'],
        answer: '<ul>',
        tip: 'Não é obrigatório que as tags sejam fechadas',
      },
      {
        question: 'Qual atributo deixa o input obrigatório?',
        options: ['placeholder', 'value', 'required', 'maxlength'],
        answer: 'required',
        tip: 'O valor do required deve ser true',
      },
      {
        question: 'A tag semântica indicada para rodapés é a:',
        options: ['div', 'main', 'section', 'footer'],
        answer: 'footer',
        tip: 'É possível colocar tudo dentro da div, mas isso pode causar problemas no CSS.',
      },
    ],
  },
  {
    category: 'CSS',
    questions: [
      {
        question: 'Qual regra altera a cor de um elemento?',
        options: ['color', 'background-color', 'font-size', 'transition'],
        answer: 'color',
        tip: 'Cor em inglês',
      },
      {
        question: 'Para aumentar a fonte de um elemento utilizamos:',
        options: ['font', 'text-transform', 'font-size', 'hover'],
        answer: 'font-size',
        tip: 'Font size in pixels (px)',
      },
      {
        question: 'A posição que deixa um elemento fixo é a:',
        options: ['static', 'absolute', 'fixed', 'relative'],
        answer: 'fixed',
        tip: 'Fixed positioning is relative to the viewport.',
      },
    ],
  },
  {
    category: 'JavaScript',
    questions: [
      {
        question: 'O que é Vanilla JavaScript?',
        options: [
          'JavaScript puro',
          'Uma biblioteca JavaScript',
          'Um framework JavaScript',
          'Um compilador de JavaScript',
        ],
        answer: 'JavaScript puro',
        tip: 'Vanilla JS não tem dependências externas',
      },
      {
        question: 'Com qual instrução declaramos uma constante em JavaScript?',
        options: ['const', 'let', 'var', 'define'],
        answer: 'const',
        tip: 'Não se deve usar variáveis globais. Se você precisar compartilhar dados entre diferentes arquivos ou módulos',
      },
      {
        question: 'Qual dos tipos de dado a seguir não existe em JavaScript?',
        options: ['string', 'number', 'boolean', 'float'],
        answer: 'float',
        tip: 'Float e Double são do mesmo tipo, mas o float só pode ter 7 casas decimais.',
      },
      {
        question: 'Qual dos métodos a seguir seleciona um elemento?',
        options: ['querySelector', 'parseInt', 'sort', 'reduce'],
        answer: 'querySelector',
        tip: 'querySelector() - Retorna apenas o primeiro item encontrado.',
      },
      {
        question:
          'Qual destas propriedades da a quantidade de elementos de um array?',
        options: ['qty', 'length', 'items', 'index'],
        answer: 'length',
        tip: 'Array.prototype.length',
      },
    ],
  },
];

export default data;
