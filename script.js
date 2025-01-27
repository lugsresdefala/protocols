document.addEventListener("DOMContentLoaded", function () {
    const chapters = [
        {
            "section": "PANORAMAS",
            "topics": [
                "1. Direitos Reprodutivos e a Evolução das Biotecnologias",
                "2. Análise Socioeconômica e Implicações Globais",
                "3. Métricas de Sucesso e Indicadores da Qualidade do Cuidado",
                "4. Desafios Bioéticos e Desdobramentos Psicossociais"
            ]
        },
        {
            "section": "SEÇÃO I – APARATO REGULATÓRIO",
            "topics": [
                {
                    "title": "1. Arcabouço Teórico",
                    "subtopics": [
                        {
                            "title": "1.1. Princípios Bioéticos na Regulação da Reprodução Assistida",
                            "points": [
                                "1.1.1. Autonomia: Interseções entre Liberdade, Informação e Contexto",
                                "1.1.2. Beneficência e Não-Maleficência: Para Além do Cálculo Utilitário",
                                "1.1.3. Justiça: Desafios Distributivos e Reconhecimento",
                                "1.1.4. Vulnerabilidade e Cuidado: Reconhecendo a Interdependência"
                            ]
                        }
                    ]
                },
                {
                    "title": "2. Implicações da Ausência de Legislação Específica",
                    "subtopics": [
                        {
                            "title": "2.1. Implicações Éticas",
                            "points": [
                                "2.1.1. Desafios na Tomada de Decisões Clínicas",
                                "2.1.2. Dilemas Morais Envolvendo Doação de Gametas e Embriões",
                                "2.1.3. Questões de Confidencialidade e Privacidade"
                            ]
                        },
                        {
                            "title": "2.2. Implicações Legais",
                            "points": [
                                "2.2.1. Insegurança Jurídica para Profissionais e Pacientes",
                                "2.2.2. Judicialização da Reprodução Assistida",
                                "2.2.3. Lacunas na Regulamentação de Técnicas Específicas"
                            ]
                        },
                        {
                            "title": "2.3. Implicações Sociais",
                            "points": [
                                "2.3.1. Desigualdades no Acesso à Reprodução Assistida",
                                "2.3.2. Estigmatização e Discriminação de Famílias Não Convencionais",
                                "2.3.3. Impactos na Saúde Pública e na Alocação de Recursos"
                            ]
                        },
                        {
                            "title": "2.4. Implicações Clínicas",
                            "points": [
                                "2.4.1. Variabilidade nas Práticas e Protocolos Clínicos",
                                "2.4.2. Desafios na Garantia da Qualidade e Segurança dos Procedimentos",
                                "2.4.3. Limitações na Pesquisa e no Desenvolvimento de Novas Técnicas"
                            ]
                        }
                    ]
                },
                {
                    "title": "3. Principais Normas, Pareceres, Resoluções e ADIs Vigentes",
                    "subtopics": [
                        {
                            "title": "3.1. Resoluções do Conselho Federal de Medicina (CFM)",
                            "points": [
                                "3.1.1. Resolução CFM nº 2.320/2022",
                                "3.1.2. Resolução CFM nº 2.294/2021 (Revogada)"
                            ]
                        },
                        {
                            "title": "3.2. Resoluções da Agência Nacional de Vigilância Sanitária (ANVISA)",
                            "points": [
                                "3.2.1. RDC nº 771/2022",
                                "3.2.2. RDC nº 23/2011 (Substituída)"
                            ]
                        },
                        {
                            "title": "3.3. Pareceres e Jurisprudência",
                            "points": [
                                "3.3.1. Parecer CFM nº 21/2013",
                                {
                                    "title": "3.3.2. Decisões do Superior Tribunal de Justiça (STJ)",
                                    "cases": [
                                        "3.3.2.1. REsp 1.159.242",
                                        "3.3.2.2. REsp 1.862.690"
                                    ]
                                },
                                "3.3.3. Decisões do Supremo Tribunal Federal (STF)"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "section": "SEÇÃO II – RECONFIGURANDO PRÁTICAS DE CUIDADO E MÉTRICAS DE SUCESSO",
            "topics": [
                {
                    "title": "1. Integrando Práticas Baseadas em Evidências, Medicina Centrada na Pessoa e Gestão de Recursos em Saúde Reprodutiva",
                    "points": [
                        "1.1. Contexto Histórico e Fundamentos Epistemológicos",
                        "1.2. Práticas Baseadas em Evidências (PBE)",
                        "1.3. Medicina Centrada na Pessoa (MCP)",
                        "1.4. Gestão de Recursos em Saúde",
                        "1.4.1. Limiares de Custo-Efetividade em Saúde Reprodutiva: Contexto Brasileiro",
                        "1.4.2. Desfechos Obstétricos e Métricas de Sucesso em Reprodução Assistida",
                        "1.4.3. Cálculo de QALYs e Definição de Limiar de Valor (LV), Limiar de Eficácia (LE) e Limiar de Idade (LI)"
                    ]
                }
            ]
        },
        {
            "section": "SEÇÃO III – DIAGNÓSTICOS E CONDUTAS NA INFERTILIDADE",
            "topics": [
                {
                    "title": "1. Fator Ovular",
                    "points": [
                        "1.1. Idade e Reserva Ovariana",
                        "1.2. Condições Clínicas",
                        "1.3. Síndrome dos Ovários Policísticos",
                        "1.4. Insuficiência Ovariana Prematura"
                    ]
                },
                {
                    "title": "2. Fator Uterino",
                    "points": [
                        "2.1. Propedêutica",
                        "2.2. Alterações Estruturais Adquiridas",
                        "2.3. Variações Anatômicas Congênitas"
                    ]
                },
                {
                    "title": "3. Fator Tubo-Peritoneal",
                    "points": [
                        "3.1. Opções para um Diagnóstico Impreciso",
                        "3.2. Endometriose"
                    ]
                },
                {
                    "title": "4. Fator Seminal",
                    "points": [
                        "4.1. Desdobramentos do Espermograma",
                        "4.2. Hipogonadismo",
                        "4.3. Desordens da Ejaculação",
                        "4.4. Disfunção Erétil"
                    ]
                },
                {
                    "title": "5. Infertilidade sem Causa Aparente (ISCA)",
                    "topics": []
                }
            ]
        },
        {
            "section": "SEÇÃO IV – TÉCNICAS DE REPRODUÇÃO ASSISTIDA",
            "topics": [
                {
                    "title": "1. Seleção de Agentes Farmacológicos",
                    "points": [
                        "1.1. Desenvolvimento Folicular",
                        "1.2. Modulação Hipotálamo-Hipofisária",
                        "1.3. Trigger"
                    ]
                },
                {
                    "title": "2. Relações Sexuais Programadas",
                    "points": [
                        "2.1. Consciência da Fertilidade"
                    ]
                },
                {
                    "title": "3. Indicando Intervenções",
                    "subtopics": [
                        {
                            "title": "3.1. Inseminação Intrauterina",
                            "points": []
                        },
                        {
                            "title": "3.2. Fertilização in Vitro",
                            "points": [
                                "3.2.1. Estimulação Ovariana Controlada",
                                "3.2.2. Punção Ovariana e Aspiração Folicular",
                                "3.2.3. Classificação Embrionária",
                                "3.2.4. Diagnóstico Genético Pré-implantacional",
                                "3.2.5. Transferência Contígua ou Congelamento de Embriões",
                                "3.2.6. Transferência após Descongelamento de Óvulos ou Embriões",
                                "3.2.7. Endométrio Fino",
                                "3.2.8. Suporte de Fase Lútea"
                            ]
                        }
                    ]
                },
                {
                    "title": "4. Procedimentos Urológicos",
                    "points": []
                },
                {
                    "title": "5. Anestesia em Reprodução Assistida",
                    "points": []
                }
            ]
        },
        {
            "section": "SEÇÃO V - MANEJO DE INTERCORRÊNCIAS",
            "topics": [
                "1. Dor e Sangramento após Punção",
                "2. Síndrome de Hiperestimulação Ovariana",
                "3. Lesão Acidental de Estruturas Adjacentes",
                "4. Estenose do Colo Uterino",
                "5. Complicações Anestésicas"
            ]
        },
        {
            "section": "SEÇÃO VI - PRESERVAÇÃO DA FERTILIDADE",
            "topics": [
                "1. Perspectivas Clínicas e Sociais no Planejamento da Preservação de Gametas",
                "2. Princípios Bioéticos e Equidade no Acesso à Preservação da Fertilidade",
                "3. Abordagem Multidisciplinar e Planejamento de Longo Prazo"
            ]
        },
        {
            "section": "SEÇÃO VII - ESPECIFICIDADES PARA PESSOAS LGBTQIA+",
            "topics": [
                "1. Glossário de Termos",
                "2. Reparação de Entraves ao Acesso",
                "3. Intervenções Corporais na Infância e Adolescência",
                "4. Revisando a Abordagem de Pessoas Intersexo",
                "5. Bloqueio Puberal em Adolescentes Trans",
                {
                    "title": "6. Manejo da Hormonização no Planejamento Reprodutivo",
                    "points": [
                        "6.1 Hormonização Transmasculina",
                        "6.2 Hormonização Transfeminina"
                    ]
                },
                "7. Criopreservação de Células Germinativas",
                "8. Famílias Diversas e Reprodução Humana"
            ]
        },
        {
            "section": "SEÇÃO VIII - REGRAS E CONSIDERAÇÕES SOBRE DOAÇÃO",
            "topics": [
                "1. Bancos de Sêmen",
                "2. Doação de Óvulos",
                "3. Doação por Familiar",
                "4. Doação de Embriões",
                "5. Útero de Substituição"
            ]
        },
        {
            "section": "SEÇÃO IX - CONDUTAS NO RASTREIO OBRIGATÓRIO DE INFECÇÕES",
            "topics": [
                "1. Manipulação de Células Germinativas para Uso Próprio",
                "2. Manipulação de Oócitos para Doação",
                "3. Manipulação de Espermatozoides para Doação",
                "4. Indicando e Confirmando o Tratamento de Sífilis"
            ]
        },
        {
            "section": "SEÇÃO X - DESFECHOS NEGATIVOS RECORRENTES E INVESTIGAÇÕES COMPLEMENTARES RESTRITAS",
            "topics": [
                {
                    "title": "1. Desfechos Negativos Recorrentes",
                    "points": [
                        "1.1 Falha de Implantação",
                        "1.2 Perda Gestacional Precoce"
                    ]
                },
                {
                    "title": "2. Investigações Complementares Restritas",
                    "points": [
                        "2.1 Genética e Infertilidade",
                        "2.2 Pesquisa de Trombofilias"
                    ]
                }
            ]
        },
        {
            "section": "SEÇÃO XI - SEGUIMENTO OBSTÉTRICO",
            "topics": [
                "1. Acompanhamento do Beta-hCG",
                "2. Ultrassonografia Transvaginal e Avaliação Obstétrica",
                "3. Condutas após Diagnóstico Obstétrico Definitivo"
            ]
        }
    ];

    const chapterList = document.getElementById("chapter-list");
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const closeButton = document.querySelector(".close");
    const backToTopButton = document.getElementById("back-to-top");
    const chapterContent = document.getElementById("chapter-content");

    chapterContent.innerHTML = '<img src="logologo.png" alt="Logo" class="logo-image">';

    renderChapterList(chapterList, chapters);

    searchButton.addEventListener("click", () => performSearch(chapters));
    searchInput.addEventListener("input", debounce(() => performSearch(chapters), 300));

    closeButton.addEventListener("click", () => toggleModal(false));
    window.addEventListener("click", (event) => {
        const modal = document.getElementById("modal");
        if (event.target === modal) toggleModal(false);
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    function renderChapterList(chapterList, chapters) {
        chapterList.innerHTML = "";
        chapters.forEach((chapter, index) => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.href = `#chapter-${index}`;
            link.textContent = chapter.section;
            link.setAttribute("role", "button");
            link.setAttribute("tabindex", "0");

            link.addEventListener("click", (e) => {
                e.preventDefault();
                toggleChapterContent(index, chapters);
            });

            link.addEventListener("keypress", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    toggleChapterContent(index, chapters);
                }
            });

            li.appendChild(link);
            chapterList.appendChild(li);
        });
    }

    function toggleChapterContent(index, chapters) {
        const chapter = chapters[index];
        if (!chapter) return;

        if (chapterContent.dataset.currentChapter == index) {
            chapterContent.innerHTML = '<img src="logologo.png" alt="Logo" class="logo-image">';
            delete chapterContent.dataset.currentChapter;
        } else {
            chapterContent.innerHTML = "";
            chapterContent.dataset.currentChapter = index;

            const chapterTitle = document.createElement("h2");
            chapterTitle.textContent = chapter.section;
            chapterContent.appendChild(chapterTitle);

            chapter.topics.forEach((topic, topicIndex) => {
                const topicDiv = document.createElement("div");
                topicDiv.classList.add("topic");

                if (typeof topic === "string") {
                    const topicTitle = document.createElement("h3");
                    topicTitle.textContent = topic;

                    const topicLink = document.createElement("a");
                    topicLink.href = `conteudo.html?chapter=${index}&topic=${topicIndex}`;
                    topicLink.textContent = topic;
                    topicLink.classList.add("topic-link");

                    topicDiv.appendChild(topicTitle);
                    topicDiv.appendChild(topicLink);
                } else if (typeof topic === "object") {
                    const objTitle = topic.title || `Tópico ${topicIndex + 1}`;
                    const topicTitle = document.createElement("h3");
                    topicTitle.textContent = objTitle;

                    const topicLink = document.createElement("a");
                    topicLink.href = `conteudo.html?chapter=${index}&topic=${topicIndex}`;
                    topicLink.textContent = objTitle;
                    topicLink.classList.add("topic-link");

                    topicDiv.appendChild(topicTitle);
                    topicDiv.appendChild(topicLink);

                    if (topic.points) {
                        const ul = document.createElement("ul");
                        topic.points.forEach((pt) => {
                            const li = document.createElement("li");
                            li.textContent = pt;
                            ul.appendChild(li);
                        });
                        topicDiv.appendChild(ul);
                    }

                    if (topic.subtopics) {
                        topic.subtopics.forEach((sub, subIndex) => {
                            const subDiv = document.createElement("div");
                            subDiv.classList.add("subtopic");
                            const subTitle = document.createElement("h4");
                            subTitle.textContent = sub.title || `Subtópico ${subIndex + 1}`;
                            subDiv.appendChild(subTitle);

                            if (sub.points) {
                                const ul = document.createElement("ul");
                                sub.points.forEach((p) => {
                                    if (typeof p === "string") {
                                        const li = document.createElement("li");
                                        li.textContent = p;
                                        ul.appendChild(li);
                                    } else if (typeof p === "object") {
                                        const li = document.createElement("li");
                                        li.textContent = p.title || "Item";
                                        if (p.cases) {
                                            const innerUl = document.createElement("ul");
                                            p.cases.forEach((c) => {
                                                const innerLi = document.createElement("li");
                                                innerLi.textContent = c;
                                                innerUl.appendChild(innerLi);
                                            });
                                            li.appendChild(innerUl);
                                        }
                                        ul.appendChild(li);
                                    }
                                });
                                subDiv.appendChild(ul);
                            }
                            topicDiv.appendChild(subDiv);
                        });
                    }
                }
                chapterContent.appendChild(topicDiv);
            });
        }
    }

    function performSearch(chapters) {
        const searchTerm = document.getElementById("search-input").value.toLowerCase();
        const searchResults = document.getElementById("search-results");
        searchResults.innerHTML = "";

        chapters.forEach((chapter, chapterIndex) => {
            const sectionText = chapter.section.toLowerCase();
            if (sectionText.includes(searchTerm)) {
                const resultItem = document.createElement("div");
                resultItem.classList.add("result-item");
                resultItem.textContent = chapter.section;
                resultItem.addEventListener("click", () => {
                    toggleModal(false);
                    toggleChapterContent(chapterIndex, chapters);
                });
                searchResults.appendChild(resultItem);
            }

            chapter.topics.forEach((topic, topicIndex) => {
                if (typeof topic === "string") {
                    if (topic.toLowerCase().includes(searchTerm)) {
                        const resultItem = document.createElement("div");
                        resultItem.classList.add("result-item");
                        resultItem.textContent = chapter.section + " - " + topic;
                        resultItem.addEventListener("click", () => {
                            toggleModal(false);
                            toggleChapterContent(chapterIndex, chapters);
                            highlightTopic(topicIndex);
                        });
                        searchResults.appendChild(resultItem);
                    }
                } else if (typeof topic === "object") {
                    const topicTitle = (topic.title || "").toLowerCase();
                    if (topicTitle.includes(searchTerm)) {
                        const resultItem = document.createElement("div");
                        resultItem.classList.add("result-item");
                        resultItem.textContent = chapter.section + " - " + topic.title;
                        resultItem.addEventListener("click", () => {
                            toggleModal(false);
                            toggleChapterContent(chapterIndex, chapters);
                            highlightTopic(topicIndex);
                        });
                        searchResults.appendChild(resultItem);
                    }
                    if (topic.points) {
                        topic.points.forEach((pt) => {
                            if (pt.toLowerCase().includes(searchTerm)) {
                                const resultItem = document.createElement("div");
                                resultItem.classList.add("result-item");
                                resultItem.textContent = chapter.section + " - " + (topic.title || "") + " - " + pt;
                                resultItem.addEventListener("click", () => {
                                    toggleModal(false);
                                    toggleChapterContent(chapterIndex, chapters);
                                    highlightTopic(topicIndex);
                                });
                                searchResults.appendChild(resultItem);
                            }
                        });
                    }
                    if (topic.subtopics) {
                        topic.subtopics.forEach((sub) => {
                            const st = (sub.title || "").toLowerCase();
                            if (st.includes(searchTerm)) {
                                const resultItem = document.createElement("div");
                                resultItem.classList.add("result-item");
                                resultItem.textContent = chapter.section + " - " + (topic.title || "") + " - " + sub.title;
                                resultItem.addEventListener("click", () => {
                                    toggleModal(false);
                                    toggleChapterContent(chapterIndex, chapters);
                                    highlightTopic(topicIndex);
                                });
                                searchResults.appendChild(resultItem);
                            }
                            if (sub.points) {
                                sub.points.forEach((p) => {
                                    if (typeof p === "string") {
                                        if (p.toLowerCase().includes(searchTerm)) {
                                            const resultItem = document.createElement("div");
                                            resultItem.classList.add("result-item");
                                            resultItem.textContent = chapter.section + " - " + (topic.title || "") + " - " + (sub.title || "") + " - " + p;
                                            resultItem.addEventListener("click", () => {
                                                toggleModal(false);
                                                toggleChapterContent(chapterIndex, chapters);
                                                highlightTopic(topicIndex);
                                            });
                                            searchResults.appendChild(resultItem);
                                        }
                                    } else if (typeof p === "object") {
                                        const pTitle = (p.title || "").toLowerCase();
                                        if (pTitle.includes(searchTerm)) {
                                            const resultItem = document.createElement("div");
                                            resultItem.classList.add("result-item");
                                            resultItem.textContent = chapter.section + " - " + (topic.title || "") + " - " + (sub.title || "") + " - " + p.title;
                                            resultItem.addEventListener("click", () => {
                                                toggleModal(false);
                                                toggleChapterContent(chapterIndex, chapters);
                                                highlightTopic(topicIndex);
                                            });
                                            searchResults.appendChild(resultItem);
                                        }
                                        if (p.cases) {
                                            p.cases.forEach((c) => {
                                                if (c.toLowerCase().includes(searchTerm)) {
                                                    const resultItem = document.createElement("div");
                                                    resultItem.classList.add("result-item");
                                                    resultItem.textContent = chapter.section + " - " + (topic.title || "") + " - " + (sub.title || "") + " - " + p.title + " - " + c;
                                                    resultItem.addEventListener("click", () => {
                                                        toggleModal(false);
                                                        toggleChapterContent(chapterIndex, chapters);
                                                        highlightTopic(topicIndex);
                                                    });
                                                    searchResults.appendChild(resultItem);
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        });
                    }
                }
            });
        });

        if (!searchResults.children.length) {
            searchResults.innerHTML = "<p>Nenhum resultado encontrado.</p>";
        }

        toggleModal(true);
    }

    function toggleModal(show) {
        const modal = document.getElementById("modal");
        modal.style.display = show ? "block" : "none";
    }

    function highlightTopic(topicIndex) {
        const topics = document.querySelectorAll(".topic");
        const topicElement = topics[topicIndex];
        if (topicElement) {
            topicElement.classList.add("highlight");
            setTimeout(() => {
                topicElement.classList.remove("highlight");
            }, 2000);
        }
    }

    function debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Handle keyboard navigation
    document.addEventListener("keydown", (event) => {
        const activeElement = document.activeElement;
        if (event.key === "ArrowDown") {
            if (activeElement.tagName === "A" && activeElement.parentElement.nextElementSibling) {
                activeElement.parentElement.nextElementSibling.querySelector("a").focus();
            } else if (activeElement.id === "search-input") {
                document.querySelector("#chapter-list a").focus();
            }
        } else if (event.key === "ArrowUp") {
            if (activeElement.tagName === "A" && activeElement.parentElement.previousElementSibling) {
                activeElement.parentElement.previousElementSibling.querySelector("a").focus();
            } else if (activeElement.id === "search-input") {
                document.querySelector("#search-button").focus();
            }
        } else if (event.key === "Enter" && activeElement.tagName === "A") {
            activeElement.click();
        }
    });
});
