import { ReadingText, NativeTree } from '../types';

export const NATIVE_TREES: NativeTree[] = [
  {
    id: 'ipe-amarelo',
    name: 'Ipê-Amarelo',
    scientificName: 'Handroanthus albus',
    biome: 'Cerrado e Mata Atlântica',
    height: 'Até 30 metros',
    curiosity: 'É considerada a flor símbolo do Brasil! Perde todas as folhas no inverno e explode em um amarelo deslumbrante na chegada da primavera.',
    flowerColor: 'bg-amber-400 text-amber-950',
    unlockedAtPoints: 0,
    badgeIcon: '🌼',
    photoDescription: 'Copas douradas reluzentes sob o céu azul ensolarado.'
  },
  {
    id: 'sumauma',
    name: 'Sumaúma (Árvore da Vida)',
    scientificName: 'Ceiba pentandra',
    biome: 'Amazônia',
    height: 'Até 70 metros (gigante da floresta)',
    curiosity: 'Chamada pelos povos originários de "mãe de todas as árvores". Suas raízes gigantes (sapopembas) ecoam sons que servem de comunicação na mata.',
    flowerColor: 'bg-emerald-500 text-white',
    unlockedAtPoints: 100,
    badgeIcon: '👑',
    photoDescription: 'Tronco majestoso com raízes tabulares que parecem muralhas.'
  },
  {
    id: 'araucaria',
    name: 'Araucária (Pinheiro-do-Paraná)',
    scientificName: 'Araucaria angustifolia',
    biome: 'Mata de Araucárias (Sul do Brasil)',
    height: 'Até 50 metros',
    curiosity: 'Dá o delicioso pinhão! A ave gralha-azul enterra suas sementes na terra para comer mais tarde e acaba plantando milhares de novas árvores.',
    flowerColor: 'bg-teal-600 text-white',
    unlockedAtPoints: 200,
    badgeIcon: '🌲',
    photoDescription: 'Copa em formato de taça característica dos planaltos do sul.'
  },
  {
    id: 'jequitiba-rosa',
    name: 'Jequitibá-Rosa (Patriarca da Floresta)',
    scientificName: 'Cariniana legalis',
    biome: 'Mata Atlântica',
    height: 'Pode passar de 50 metros',
    curiosity: 'Existem exemplares no Brasil com mais de 3.000 anos de idade! É uma das maiores e mais antigas árvores vivas da América do Sul.',
    flowerColor: 'bg-rose-500 text-white',
    unlockedAtPoints: 300,
    badgeIcon: '🏛️',
    photoDescription: 'Tronco reto e colossal que atravessa as copas mais altas da floresta.'
  },
  {
    id: 'pau-brasil',
    name: 'Pau-Brasil (Ibirapitanga)',
    scientificName: 'Paubrasilia echinata',
    biome: 'Mata Atlântica Costeira',
    height: 'Entre 10 e 15 metros',
    curiosity: 'Deu origem ao nome do nosso país! Seu interior tem uma seiva vermelha como brasa ("brasil"), que era usada pelos povos indígenas para tingir tecidos.',
    flowerColor: 'bg-red-500 text-white',
    unlockedAtPoints: 400,
    badgeIcon: '🇧🇷',
    photoDescription: 'Flores amarelas com uma pétala central manchada de púrpura.'
  }
];

export const READING_TEXTS: ReadingText[] = [
  {
    id: 'ipe-escola',
    title: 'O Mistério do Ipê-Amarelo da Escola',
    subtitle: 'Um desafio na Semana da Árvore',
    author: 'Conto Didático - 5º Ano',
    treeSpecies: 'Ipê-Amarelo',
    biome: 'Cerrado / Cidade',
    paragraphs: [
      'No pátio da Escola Municipal Monteiro Lobato, havia um ipê-amarelo muito querido por todos os alunos do quinto ano. Todo ano, na Semana da Árvore, em meados de setembro, ele se transformava em uma imensa nuvem dourada, oferecendo sombra fresca e abrigo para dezenas de sabiás.',
      'Porém, naquele ano, algo estranho aconteceu logo na primeira semana de setembro: em vez de começarem a surgir os primeiros botões amarelos, as folhas do ipê continuavam secas no chão e a terra ao redor da árvore estava dura como pedra e coberta por uma espessa camada de entulho esquecida após uma reforma no muro.',
      'Preocupados com a saúde da árvore, Lucas e Sofia decidiram investigar. Ao cavarem com cuidado perto da raiz, descobriram que o entulho havia bloqueado a valeta por onde a água da chuva descia até as raízes mais profundas. A árvore estava com sede e não conseguia juntar forças para florescer.',
      'Sem perder tempo, os dois amigos convocaram toda a turma do 5º ano para um mutirão ecológico. Com luvas, pás e baldes de água, retiraram todos os restos de cimento, afofaram a terra seca e regaram o ipê com muito carinho todos os dias.',
      'Duas semanas depois, no dia 21 de setembro — exatamente no Dia da Árvore —, a escola foi surpreendida por um espetáculo maravilhoso: o ipê acordou completamente florido, cobrindo o chão de pétalas douradas e trazendo de volta o canto alegre dos pássaros.'
    ],
    vocabulary: [
      { word: 'Mutirão', meaning: 'Mobilização coletiva de pessoas para realizar um trabalho em conjunto.' },
      { word: 'Entulho', meaning: 'Restos de tijolos, cimento e materiais que sobram de uma obra.' },
      { word: 'Afofaram', meaning: 'Tornaram a terra mais macia e arejada para facilitar a entrada de ar e água.' }
    ],
    questions: [
      {
        id: 'ipe-q1',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Conflito Gerador',
        focusSkill: 'Conflito Gerador do Enredo',
        questionText: 'O conflito que dá início a toda a ação dos personagens na história acontece quando:',
        options: [
          { id: 'A', text: 'Os pássaros voltam a cantar no pátio da escola no Dia da Árvore.' },
          { id: 'B', text: 'Lucas e Sofia percebem que o ipê não está florescendo e encontram a terra endurecida com entulho.' },
          { id: 'C', text: 'Os alunos do quinto ano se reúnem para comemorar as férias de inverno.' },
          { id: 'D', text: 'A reforma no muro da escola é finalmente concluída pelos pedreiros.' }
        ],
        correctOptionId: 'B',
        hint: 'O conflito gerador é o problema que quebra a rotina e faz com que os personagens precisem agir para resolver uma situação.',
        explanation: 'Muito bem! O conflito gerador é a descoberta de que o ipê não estava florescendo devido ao entulho e à terra seca (2º parágrafo). Isso gerou a investigação de Lucas e Sofia e o mutirão.',
        textReference: 'Releia o 2º parágrafo: "Porém, naquele ano, algo estranho aconteceu..."'
      },
      {
        id: 'ipe-q2',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Causa',
        focusSkill: 'Causa (Por qual motivo)',
        questionText: 'De acordo com o 3º parágrafo, por qual motivo o ipê-amarelo não conseguia juntar forças para florescer?',
        options: [
          { id: 'A', text: 'Porque os sabiás haviam abandonado seus galhos durante a tempestade.' },
          { id: 'B', text: 'Porque o entulho da obra bloqueou a valeta e a água da chuva não chegava às suas raízes.' },
          { id: 'C', text: 'Porque as crianças brincavam perto do seu tronco no horário do recreio.' },
          { id: 'D', text: 'Porque ainda faltavam muitos meses para a chegada da primavera.' }
        ],
        correctOptionId: 'B',
        hint: 'Procure no texto a causa direta: o que o entulho fez que impediu a árvore de beber água?',
        explanation: 'Exato! A causa da fraqueza do ipê foi o bloqueio da valeta pelo entulho, impedindo a passagem da água da chuva até as raízes mais profundas.',
        textReference: 'Releia o 3º parágrafo: "...o entulho havia bloqueado a valeta por onde a água da chuva descia..."'
      },
      {
        id: 'ipe-q3',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Consequência',
        focusSkill: 'Consequência (O que aconteceu em seguida)',
        questionText: 'Qual foi a consequência direta do mutirão organizado pelos alunos do 5º ano?',
        options: [
          { id: 'A', text: 'A escola precisou construir outro muro mais alto no pátio.' },
          { id: 'B', text: 'O ipê floriu intensamente no Dia da Árvore e os pássaros voltaram a cantar em seus galhos.' },
          { id: 'C', text: 'A diretora cancelou as comemorações da Semana da Árvore.' },
          { id: 'D', text: 'As crianças tiveram que plantar sementes em outro local distante da cidade.' }
        ],
        correctOptionId: 'B',
        hint: 'Consequência é o resultado, o que aconteceu como efeito do cuidado e da rega diária dos alunos.',
        explanation: 'Excelente! Como consequência do cuidado, da limpeza e da rega (efeito gerado pela ação), no dia 21 de setembro o ipê acordou totalmente florido e cheio de vida.',
        textReference: 'Releia o 5º parágrafo: "...o ipê acordou completamente florido, cobrindo o chão de pétalas douradas..."'
      },
      {
        id: 'ipe-q4',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Elementos da Narrativa',
        focusSkill: 'Espaço e Clímax da Narrativa',
        questionText: 'Em qual espaço (cenário) a maior parte da história se desenrola e qual é o desfecho da narrativa?',
        options: [
          { id: 'A', text: 'Na floresta amazônica; e o desfecho é a partida de Lucas e Sofia para outra cidade.' },
          { id: 'B', text: 'No laboratório de ciências; e o desfecho é uma pesquisa em livros antigos.' },
          { id: 'C', text: 'No pátio da Escola Monteiro Lobato; e o desfecho é a floração radiante do ipê no Dia da Árvore.' },
          { id: 'D', text: 'Em uma praça do centro da capital; e o desfecho é a contratação de jardineiros.' }
        ],
        correctOptionId: 'C',
        hint: 'Espaço é onde os fatos acontecem. Desfecho é como a história termina de forma harmoniosa.',
        explanation: 'Correto! O espaço é o pátio da Escola Municipal Monteiro Lobato e o desfecho (fim do conflito) é o florescimento triunfal do ipê após a união da turma.',
        textReference: 'Veja o 1º parágrafo (apresentação do espaço) e o 5º parágrafo (desfecho).'
      }
    ]
  },
  {
    id: 'gralha-araucaria',
    title: 'O Segredo da Gralha-Azul e o Pinheiro',
    subtitle: 'Uma lenda e fábula ecológica do Sul do Brasil',
    author: 'Fábula Ecológica Tradicional',
    treeSpecies: 'Araucária',
    biome: 'Mata de Araucárias',
    paragraphs: [
      'No coração das serras frias do sul do Brasil, vivia uma jovem gralha-azul chamada Celeste. Ela era admirada por suas penas reluzentes da cor do céu límpido, mas tinha uma missão que herdara de seus antepassados: guardar pinhões para o rigoroso inverno.',
      'Certo dia de outono, um vendaval forte sacudiu os pinheiros mais altos e derrubou uma quantidade enorme de pinhas maduras. Celeste sabia que outros animais da floresta poderiam comer tudo rapidamente. Por isso, começou a enterrar os maiores pinhões no solo úmido e fofo da montanha, cobrindo cada um com pequenas folhas secas para mantê-los escondidos.',
      'Porém, durante o longo e gelado inverno, uma densa nevasca cobriu toda a mata. Quando o frio finalmente diminuiu, Celeste foi procurar suas despensas secretas, mas percebeu que havia esquecido o ponto exato onde enterrara dezenas daquelas sementes.',
      'Desesperada, achou que havia perdido todo o seu precioso trabalho. Mas, com a chegada dos primeiros raios quentes da primavera, algo mágico se revelou: as sementes que a gralha esquecera embaixo da terra começaram a germinar, alimentadas pela umidade do solo. Pequenos brotos pontiagudos de araucária despontaram por toda a colina.',
      'Ao ver a nova floresta nascer graças ao seu esquecimento, o sábio gavião-carcará pousou perto dela e disse: "Não se entristeça, Celeste. Seu esquecimento foi o maior presente para a natureza. Você não apenas guardou alimento; você reflorestou nossa montanha!" Desde então, a gralha-azul compreendeu o verdadeiro propósito de sua espécie como guardiã das araucárias.'
    ],
    vocabulary: [
      { word: 'Araucária', meaning: 'Pinheiro típico do Sul do Brasil que produz o pinhão.' },
      { word: 'Despensa', meaning: 'Lugar onde se guardam provisões e alimentos para o futuro.' },
      { word: 'Germinar', meaning: 'Começar a crescer; brotar a partir de uma semente.' }
    ],
    questions: [
      {
        id: 'gralha-q1',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Conflito Gerador',
        focusSkill: 'Conflito Gerador da Narrativa',
        questionText: 'O acontecimento que cria a complicação e a aflição da personagem principal é quando:',
        options: [
          { id: 'A', text: 'Celeste aprende a voar sobre as montanhas mais altas da serra.' },
          { id: 'B', text: 'A gralha-azul percebe que esqueceu onde havia enterrado as sementes após a nevasca de inverno.' },
          { id: 'C', text: 'O gavião-carcará ensina a gralha a cantar canções de primavera.' },
          { id: 'D', text: 'Os pinhões caem no chão durante o outono chuvoso.' }
        ],
        correctOptionId: 'B',
        hint: 'Observe o momento em que Celeste fica desesperada e pensa que seu trabalho foi perdido.',
        explanation: 'Parabéns! O conflito que abala a tranquilidade da protagonista é o fato de ela não encontrar o local onde escondera as sementes (3º parágrafo).',
        textReference: 'Releia o 3º parágrafo: "...percebeu que havia esquecido o ponto exato onde enterrara dezenas daquelas sementes."'
      },
      {
        id: 'ipe-q2-gralha',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Causa',
        focusSkill: 'Causa (Motivo da Ação)',
        questionText: 'Por qual motivo Celeste enterrou os maiores pinhões no solo da montanha durante o outono?',
        options: [
          { id: 'A', text: 'Porque ela queria brincar de esconde-esconde com os filhotes de esquilo.' },
          { id: 'B', text: 'Porque precisava guardar comida para o rigoroso inverno antes que outros animais comessem tudo.' },
          { id: 'C', text: 'Porque as sementes estavam pesadas demais para ela conseguir carregar voando.' },
          { id: 'D', text: 'Porque o vento havia quebrado seu ninho no alto do pinheiro.' }
        ],
        correctOptionId: 'B',
        hint: 'Volte ao 2º parágrafo e veja o motivo pelo qual ela recolheu e enterrou os pinhões.',
        explanation: 'Muito bem! A causa da ação foi a necessidade de estocar alimentos para o inverno e evitar que fossem consumidos por outros animais da mata.',
        textReference: 'Releia o 2º parágrafo: "Celeste sabia que outros animais da floresta poderiam comer tudo... começou a enterrar os maiores pinhões..."'
      },
      {
        id: 'gralha-q3',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Consequência',
        focusSkill: 'Consequência (Efeito do Esquecimento)',
        questionText: 'Qual foi a consequência do esquecimento de Celeste para o ecossistema da montanha?',
        options: [
          { id: 'A', text: 'Os animais ficaram sem abrigo durante a primavera.' },
          { id: 'B', text: 'As sementes apodreceram e a terra ficou estéril.' },
          { id: 'C', text: 'As sementes enterradas brotaram na primavera, reflorestando a colina com novas araucárias.' },
          { id: 'D', text: 'A gralha-azul foi expulsa da floresta pelo sábio gavião-carcará.' }
        ],
        correctOptionId: 'C',
        hint: 'Pense no resultado positivo que aconteceu na terra na estação da primavera.',
        explanation: 'Brilhante! O esquecimento de onde estavam as sementes gerou como consequência a germinação dos pinhões e o nascimento de novas árvores de araucária.',
        textReference: 'Releia o 4º parágrafo: "...as sementes que a gralha esquecera embaixo da terra começaram a germinar..."'
      },
      {
        id: 'gralha-q4',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Elementos da Narrativa',
        focusSkill: 'Personagens e Ensinamento / Clímax',
        questionText: 'Quem ajuda Celeste a compreender o valor de sua ação no desfecho da história e que papel esse personagem exerce?',
        options: [
          { id: 'A', text: 'O sábio gavião-carcará, que atua como conselheiro e revela que ela ajudou a reflorestar a mata.' },
          { id: 'B', text: 'Uma serpente venenosa, que tenta roubar as sementes do chão.' },
          { id: 'C', text: 'Um lenhador que passava pela floresta à procura de madeira.' },
          { id: 'D', text: 'Outra jovem gralha que zomba de seu esquecimento.' }
        ],
        correctOptionId: 'A',
        hint: 'Procure no 5º parágrafo qual personagem conversa com Celeste e a tranquiliza.',
        explanation: 'Exato! O sábio gavião-carcará é o personagem conselheiro que conforta Celeste e explica a importância ecológica da ave no ciclo da floresta.',
        textReference: 'Releia o 5º parágrafo: "...o sábio gavião-carcará pousou perto dela e disse..."'
      }
    ]
  },
  {
    id: 'sumauma-amazonia',
    title: 'A Grande Sumaúma e o Sussurro das Águas',
    subtitle: 'Narrativa da Floresta Amazônica',
    author: 'Adaptação de Lenda Amazônica',
    treeSpecies: 'Sumaúma',
    biome: 'Amazônia',
    paragraphs: [
      'Às margens de um igarapé límpido na Amazônia, erguia-se a Rainha da Floresta: uma majestosa Sumaúma cujos galhos tocavam as nuvens e cujas raízes tubulares, chamadas sapopembas, formavam labirintos gigantescos onde macacos, cutias e tartarugas encontravam refúgio seguro.',
      'Certo ano, uma seca prolongada e sem precedentes castigou a região. O igarapé começou a recuar rapidamente, deixando os peixes em poças rasas e os animais com sede terrível. O medo tomou conta dos bichos, que não sabiam para onde fugir diante daquele calor sufocante.',
      'Percebendo o perigo iminente para seus protegidos, a velha Sumaúma mergulhou suas raízes ainda mais fundo no solo fértil da bacia amazônica, alcançando lençóis de água pura escondidos nas profundezas da terra. Com suas grossas fibras vegetais, ela bombeou centenas de litros de água até o topo de sua copa e transpirou uma umidade fresca em forma de névoa.',
      'Ao mesmo tempo, quando o vento bateu em suas sapopembas ocas, um estrondo rítmico ecoou pela mata, como um tambor ancestral chamando a chuva. Atraídas pela umidade e pelo som profundo, densas nuvens escuras se aglomeraram no céu sobre a grande árvore.',
      'Uma chuva torrencial e refrescante desabou sobre o leito do igarapé, enchendo novamente as lagoas e salvando toda a comunidade de animais da seca mortal. A partir daquele dia, todos os seres da floresta entenderam que sem as grandes árvores, a água desaparece e a vida não pode continuar.'
    ],
    vocabulary: [
      { word: 'Igarapé', meaning: 'Pequeno braço de rio ou riacho comum na bacia amazônica.' },
      { word: 'Sapopembas', meaning: 'Raízes grandes e achatadas que funcionam como contrafortes para sustentar árvores gigantes.' },
      { word: 'Lençóis de água', meaning: 'Reservatórios naturais de água subterrânea localizados no fundo da terra.' }
    ],
    questions: [
      {
        id: 'sum-q1',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Conflito Gerador',
        focusSkill: 'Conflito Gerador do Enredo',
        questionText: 'Qual acontecimento quebra o equilíbrio inicial da floresta e dá início ao conflito vivido pelos animais?',
        options: [
          { id: 'A', text: 'A chegada de pesquisadores que queriam medir a altura da Sumaúma.' },
          { id: 'B', text: 'Uma seca intensa e incomum que fez o igarapé secar e deixou os animais sem água.' },
          { id: 'C', text: 'O nascimento de um filhote de tartaruga nas raízes da árvore.' },
          { id: 'D', text: 'A tempestade com relâmpagos que assustou os macacos da copa.' }
        ],
        correctOptionId: 'B',
        hint: 'Veja o 2º parágrafo: o que aconteceu para gerar pânico e desespero entre os animais?',
        explanation: 'Corretíssimo! O conflito gerador é a grande seca prolongada que secou o igarapé e ameaçou a sobrevivência de todos os animais da região.',
        textReference: 'Releia o 2º parágrafo: "Certo ano, uma seca prolongada e sem precedentes castigou a região..."'
      },
      {
        id: 'sum-q2',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Causa',
        focusSkill: 'Causa (Origem da Névoa)',
        questionText: 'De acordo com o 3º parágrafo, a névoa fresca surgiu sobre a floresta porque:',
        options: [
          { id: 'A', text: 'O calor do sol evaporou a água dos ninhos dos pássaros.' },
          { id: 'B', text: 'A Sumaúma puxou água dos lençóis profundos pelas raízes e transpirou umidade pela copa.' },
          { id: 'C', text: 'Os peixes saltavam no ar para espalhar gotas d’água na vegetação.' },
          { id: 'D', text: 'O igarapé transbordou de repente durante a madrugada fria.' }
        ],
        correctOptionId: 'B',
        hint: 'Procure no texto a ação da Sumaúma com suas raízes e sua copa.',
        explanation: 'Muito bem! A causa da névoa foi a capacidade da árvore de sugar água profunda com suas raízes e liberá-la através da transpiração de suas folhas.',
        textReference: 'Releia o 3º parágrafo: "...alcançando lençóis de água pura... transpirou uma umidade fresca em forma de névoa."'
      },
      {
        id: 'sum-q3',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Consequência',
        focusSkill: 'Consequência (Efeito da Chuva)',
        questionText: 'A chuva torrencial atraída pela umidade da Sumaúma teve como consequência imediata:',
        options: [
          { id: 'A', text: 'A destruição dos ninhos e a queda da grande árvore centenária.' },
          { id: 'B', text: 'O enchimento do igarapé e a salvação dos animais que sofriam com a seca.' },
          { id: 'C', text: 'A fuga definitiva de todos os macacos para as cidades vizinhas.' },
          { id: 'D', text: 'O congelamento das águas do rio com a chegada do inverno.' }
        ],
        correctOptionId: 'B',
        hint: 'Consequência é o que a chuva provocou de positivo para os animais e para o rio.',
        explanation: 'Sensacional! O efeito direto da chuva foi reabastecer as lagoas e o igarapé, preservando a vida dos animais da comunidade biológica.',
        textReference: 'Releia o 5º parágrafo: "...enchendo novamente as lagoas e salvando toda a comunidade de animais..."'
      },
      {
        id: 'sum-q4',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Elementos da Narrativa',
        focusSkill: 'Tempo e Clímax da História',
        questionText: 'O momento de maior tensão (o clímax) da história ocorre quando:',
        options: [
          { id: 'A', text: 'As tartarugas passeiam tranquilamente nas margens no início do texto.' },
          { id: 'B', text: 'A árvore ecoa sons de tambor nas sapopembas e densas nuvens escuras se juntam antes de chover.' },
          { id: 'C', text: 'Os peixes nadam felizes semanas após a chuva ter passado.' },
          { id: 'D', text: 'As sementes da sumaúma viajam com o vento na primavera seguinte.' }
        ],
        correctOptionId: 'B',
        hint: 'O clímax é o ponto culminante de expectativa, quando todos esperam ansiosamente para ver se a chuva virá.',
        explanation: 'Perfeito! O clímax é o ápice do enredo: a árvore emite o som ritmado com as raízes, as nuvens pesadas se acumulam e a chuva está prestes a desabar.',
        textReference: 'Releia o 4º parágrafo: "...um estrondo rítmico ecoou... densas nuvens escuras se aglomeraram no céu..."'
      }
    ]
  },
  {
    id: 'jequitiba-historico',
    title: 'O Velho Patriarca e as Vozes do Bairro',
    subtitle: 'Um conto sobre preservação e cidadania',
    author: 'Crônica Narrativa Escolar',
    treeSpecies: 'Jequitibá-Rosa',
    biome: 'Mata Atlântica',
    paragraphs: [
      'No meio de uma praça pública cercada por prédios e carros barulhentos, resistia bravamente um jequitibá-rosa de mais de duzentos anos. Seus galhos robustos abraçavam o céu e serviam de ponto de encontro para crianças brincarem de roda após as aulas.',
      'A paz do bairro foi rompida em uma terça-feira cinzenta, quando uma empreiteira colocou faixas amarelas e placas anunciando que a árvore seria cortada na semana seguinte para dar lugar a um estacionamento de shopping. Aquela notícia caiu como uma bomba entre os moradores.',
      'Os estudantes do 5º ano não aceitaram aquela decisão passivamente. Liderados pela professora Helena, iniciaram um projeto de redação e pesquisa: entrevistaram os moradores mais velhos sobre a história da árvore, mediram o tronco que precisava de seis crianças de mãos dadas para abraçar e produziram cartazes coloridos com o lema "O Jequitibá é Nosso Patrimônio Vivo!".',
      'No sábado anterior à data marcada para o corte, centenas de famílias se reuniram ao redor da árvore em um comovente abraço coletivo. A reportagem da televisão municipal esteve presente e transmitiu a mobilização ao vivo, mostrando os desenhos e as cartas emocionantes escritas pelas crianças pedindo a preservação.',
      'Diante da repercussão popular e da prova histórica de que o jequitibá fora plantado no século XIX, a prefeitura decretou o tombamento oficial da árvore como Patrimônio Natural da Cidade. O estacionamento foi transferido para um terreno baldio e o jequitibá continuou de pé, firme como o guardião da memória daquele lugar.'
    ],
    vocabulary: [
      { word: 'Tombamento', meaning: 'Ato legal do governo que protege um bem histórico ou natural contra demolição ou destruição.' },
      { word: 'Empreiteira', meaning: 'Empresa responsável por obras de construção civil.' },
      { word: 'Patrimônio', meaning: 'Herança cultural ou natural de grande valor para uma comunidade.' }
    ],
    questions: [
      {
        id: 'jeq-q1',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Conflito Gerador',
        focusSkill: 'Conflito Gerador do Enredo',
        questionText: 'Qual acontecimento gerou o conflito da história e provocou a mobilização das crianças?',
        options: [
          { id: 'A', text: 'A reforma da calçada da praça durante as férias de julho.' },
          { id: 'B', text: 'O anúncio de que o jequitibá-rosa seria cortado para a construção de um estacionamento.' },
          { id: 'C', text: 'A chegada de uma família nova para morar em um dos prédios vizinhos.' },
          { id: 'D', text: 'A chuva forte que derrubou um pequeno galho seco da árvore.' }
        ],
        correctOptionId: 'B',
        hint: 'Procure a notícia ruim que quebrou a paz do bairro no 2º parágrafo.',
        explanation: 'Excelente! O conflito gerador é a ameaça de corte da árvore histórica para dar lugar ao estacionamento, o que impulsionou a reação de toda a comunidade.',
        textReference: 'Releia o 2º parágrafo: "A paz do bairro foi rompida... placas anunciando que a árvore seria cortada..."'
      },
      {
        id: 'jeq-q2',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Causa',
        focusSkill: 'Causa (Por que a prefeitura tombou)',
        questionText: 'A prefeitura municipal decretou o tombamento oficial do jequitibá-rosa porque:',
        options: [
          { id: 'A', text: 'A empresa de shopping faliu e desistiu de todas as suas obras.' },
          { id: 'B', text: 'Ficou comprovada a importância histórica da árvore bicentenária após a grande comoção e mobilização popular.' },
          { id: 'C', text: 'Os carros não conseguiam entrar na praça devido ao trânsito intenso.' },
          { id: 'D', text: 'O terreno pertencia exclusivamente à escola dos estudantes.' }
        ],
        correctOptionId: 'B',
        hint: 'Veja no 5º parágrafo o motivo pelo qual o prefeito e as autoridades mudaram de ideia.',
        explanation: 'Perfeito! A causa da decisão governamental foi a comoção popular provocada pelas crianças e a constatação do valor histórico do jequitibá.',
        textReference: 'Releia o 5º parágrafo: "Diante da repercussão popular e da prova histórica... a prefeitura decretou o tombamento..."'
      },
      {
        id: 'jeq-q3',
        descriptor: 'D08',
        descriptorLabel: 'D08 - Relação de Consequência',
        focusSkill: 'Consequência (Efeito da Reportagem de TV)',
        questionText: 'A transmissão da reportagem pela televisão ao vivo gerou como consequência:',
        options: [
          { id: 'A', text: 'A interrupção das aulas na escola por duas semanas seguidas.' },
          { id: 'B', text: 'Uma grande repercussão pública que pressionou as autoridades a protegerem a árvore.' },
          { id: 'C', text: 'A demolição imediata de todos os prédios ao redor da praça.' },
          { id: 'D', text: 'O corte antecipado dos galhos mais antigos do jequitibá.' }
        ],
        correctOptionId: 'B',
        hint: 'Pense no impacto de a reportagem mostrar os cartazes e o abraço das crianças para a cidade inteira.',
        explanation: 'Muito bem! A consequência da transmissão foi amplificar a voz das crianças, sensibilizando a sociedade e obrigando as autoridades a agir.',
        textReference: 'Releia os parágrafos 4 e 5: "...transmitiu a mobilização ao vivo... Diante da repercussão popular..."'
      },
      {
        id: 'jeq-q4',
        descriptor: 'D07',
        descriptorLabel: 'D07 - Elementos da Narrativa',
        focusSkill: 'Personagens Protagonistas e Desfecho',
        questionText: 'Quem são os verdadeiros heróis da narrativa que mudaram o destino do jequitibá e qual foi o desfecho da história?',
        options: [
          { id: 'A', text: 'Os donos da empreiteira; e o desfecho foi o plantio de grama sintética.' },
          { id: 'B', text: 'Os alunos do 5º ano e a professora Helena; e o desfecho foi a salvação do jequitibá e a transferência da obra.' },
          { id: 'C', text: 'Os motoristas de trânsito; e o desfecho foi o cancelamento do shopping.' },
          { id: 'D', text: 'Apenas os repórteres de televisão; e o desfecho foi a venda da madeira.' }
        ],
        correctOptionId: 'B',
        hint: 'Observe quem teve a ideia dos cartazes e da pesquisa, e como termina a crônica.',
        explanation: 'Sensacional! Os protagonistas da ação cidadã foram os estudantes do 5º ano com a professora Helena, e o desfecho foi a preservação definitiva do jequitibá como patrimônio.',
        textReference: 'Veja o 3º e o 5º parágrafo da narrativa.'
      }
    ]
  }
];

export const DESCRIPTOR_GUIDES = {
  D07: {
    code: 'D07',
    name: 'Conflito Gerador & Elementos da Narrativa',
    saebStandard: 'Identificar o conflito gerador do enredo e os elementos que constroem a narrativa (personagens, tempo, espaço, clímax e desfecho).',
    kidFriendlyExplanation: 'Toda história começa tranquila até que um "acontecimento especial" surge e desarruma tudo! Esse é o Conflito Gerador. É o motor que faz os personagens agirem!',
    keyQuestions: [
      'Qual foi o problema ou surpresa que mudou a vida dos personagens?',
      'Onde e quando a história acontece? (Espaço e Tempo)',
      'Qual foi o momento de maior suspense ou emoção? (Clímax)',
      'Como a situação foi resolvida no final? (Desfecho)'
    ],
    iconColor: 'from-amber-500 to-orange-600',
    badgeText: 'Detetive do Enredo'
  },
  D08: {
    code: 'D08',
    name: 'Causa & Consequência no Texto',
    saebStandard: 'Estabelecer relação causa/consequência entre partes e elementos do texto.',
    kidFriendlyExplanation: 'Na natureza e nos textos, tudo tem uma razão de acontecer! A Causa responde "Por quê?", e a Consequência responde "O que aconteceu por causa disso?".',
    keyQuestions: [
      'Por qual motivo tal fato aconteceu? (CAUSA ➡️ O Motivo)',
      'O que essa ação ou fato provocou depois? (CONSEQUÊNCIA ➡️ O Efeito)',
      'Palavras-chave: porque, portanto, por isso, devido a, como resultado.'
    ],
    iconColor: 'from-emerald-500 to-teal-600',
    badgeText: 'Mestre da Causa & Efeito'
  }
};
