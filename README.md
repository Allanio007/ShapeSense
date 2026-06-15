# ShapeSense · WebAR

> **Simulação de Prótese Mamária por Realidade Aumentada**  
> Projeto Final — Unidade 5 | Curso: Web 3.0 – Realidade Aumentada | CapacitaRA

**Autor:** Alanio Ferreira de Lima  
**Setor de aplicação:** Saúde  
**Tecnologia:** WebAR · Canvas API · HTML5 · CSS3 · JavaScript puro

---

## Sobre o projeto

**ShapeSense** é uma aplicação WebAR para dispositivos móveis que permite a simulação visual de próteses mamárias diretamente no navegador, sem instalação de aplicativos e sem envio de dados a servidores.

A ferramenta foi desenvolvida como ferramenta de apoio à consulta médica, tornando a visualização do resultado cirúrgico mais acessível e privada para a paciente.

### Por que WebAR + Saúde?

A Realidade Aumentada aplicada à saúde tem o potencial de:
- Reduzir a ansiedade pré-operatória ao permitir visualização prévia
- Aumentar a assertividade na escolha do implante
- Facilitar a comunicação entre paciente e cirurgião
- Democratizar o acesso à simulação (sem hardware especial)

---

## Funcionalidades

| Estágio | Recurso | Tecnologia |
|---------|---------|------------|
| 1 · Captura | Câmera traseira com guia de enquadramento | `getUserMedia` API |
| 2 · Medição | Overlay RA com detecção de base, projeção, distância intermamária e ptose | Canvas 2D API |
| 3 · Simulação | Sobreposição 3D interativa (volume, perfil, base, superfície) | Canvas 2D API |
| Exportação | Relatório PDF gerado localmente | `window.print()` |

### Interações implementadas
- ✅ Botão de captura (toque/clique)
- ✅ 3 sliders de ajuste em tempo real (Volume · Perfil · Base)
- ✅ Chips de seleção de superfície (Lisa / Texturizada / Poliuretano)
- ✅ Badge dinâmico de segurança (verde ≤ 350 ml · vermelho > 350 ml)
- ✅ Exportação de relatório PDF local
- ✅ Toast de notificação e feedback visual imediato

---

## Estrutura do projeto

```
ShapeSense/
├── index.html        # Tela de boas-vindas e explicação dos estágios
├── simulacao.html    # Aplicação principal (câmera → medição → simulação)
├── LEIA-ME.txt       # Créditos e documentação (exigido pela atividade)
└── README.md         # Este arquivo
```

---

## Como usar

### Online (após deploy no Netlify)
1. Acesse o link público gerado pelo Netlify
2. Permita o acesso à câmera quando solicitado
3. Siga os 3 estágios: Captura → Medição → Simulação

### Localmente
```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/ShapeSense.git

# Sirva com qualquer servidor estático (necessário para getUserMedia funcionar)
npx serve ShapeSense
# ou
python -m http.server 8080 --directory ShapeSense
```
> ⚠️ O acesso à câmera exige HTTPS ou `localhost`. Não abre como arquivo `.html` diretamente.

---

## Tecnologias utilizadas

| Tecnologia | Uso |
|------------|-----|
| HTML5 semântico | Estrutura e acessibilidade |
| CSS3 (custom properties, Grid, Flexbox) | Layout responsivo e sistema de tokens |
| JavaScript ES6+ | Lógica de captura, análise e simulação |
| Canvas 2D API | Renderização de overlay RA e simulação de implantes |
| MediaDevices.getUserMedia | Acesso à câmera traseira do dispositivo |
| window.print() | Exportação de relatório PDF sem servidor |
| Google Fonts (Playfair Display + Inter) | Tipografia |

**Sem frameworks. Sem dependências. Sem servidor. Sem nuvem.**

---

## Privacidade e segurança

- 🔒 **Processamento 100% local** — nenhum dado ou imagem é transmitido
- 🔒 Imagens ficam apenas na memória durante a sessão
- 🔒 Nenhum cookie, nenhum localStorage, nenhuma API externa
- ⚕️ Valores de volume acima de 350 ml são sinalizados com aviso de risco

---

## Algoritmo de cálculo

```
Volume sugerido (ml) = base × projeção × fator_corporal
```

- `base` → largura da base mamária detectada pelo overlay RA (cm)
- `projeção` → altura natural do busto detectada (cm)
- `fator_corporal` → constante empírica (3,85) ajustada para biotipo médio

O sistema bloqueia visualmente sugestões acima de **350 ml** com alerta de risco.

---

## Critérios da atividade atendidos

| Critério | Atendimento |
|----------|-------------|
| 1. Conceito e criatividade | ✅ Ideia original — setor Saúde, não replicada de nenhum exemplo do curso |
| 2. Personalização e otimização | ✅ Canvas API nativo, sem modelos pesados, layout responsivo |
| 3. Implementação técnica | ✅ Código limpo, comentado, estruturado em estágios com responsabilidade única |
| 4. Qualidade da interação | ✅ Sliders em tempo real, feedback visual imediato, badge de segurança |
| 5. Funcionalidade e publicação | ✅ Publicado no Netlify, link funcional em mobile, exportação PDF |

---

## Créditos

- **Tipografia:** [Playfair Display & Inter](https://fonts.google.com) — Google Fonts (OFL)
- **Referência técnica:** [MDN Web Docs — Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- **Referência técnica:** [MDN — MediaDevices.getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- **Curso de referência:** CapacitaRA — Imersão em Realidade Aumentada (Softex / iRede / Eldorado / Vertex)

> ShapeSense **não substitui consulta médica**. Desenvolvido exclusivamente para fins educacionais.

---

<div align="center">

**Alanio Ferreira de Lima**  
Curso: Web 3.0 – Realidade Aumentada · Unidade 5 · CapacitaRA  
2025

</div>
