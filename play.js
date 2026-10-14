
(function (global) {
    "use strict";

    function SNAudio() {
        this.audioId = "snu-custom-audio-player";
        this.modalId = "snu-play-audio-modal";
        this.styleId = "snu-play-audio-modal-style";

        this.commands = {
            "escreve-e-apaga": {
                url: "https://www.myinstants.com/media/sounds/escreve-e-apaga.mp3",
                description: "Escreve e Apaga"
            },
            "hehe-boi": {
                url: "https://www.myinstants.com/media/sounds/hehe-boi-sound-effect.mp3",
                description: "Hehe boi"
            },
            "tira": {
                url: "https://www.myinstants.com/media/sounds/para-tira.mp3",
                description: "Tira"
            },
            "paje": {
                url: "https://www.myinstants.com/media/sounds/ai-paje.mp3",
                description: "Pajé"
            },
            "ryu": {
                url: "https://www.myinstants.com/media/sounds/da_hadouken_ryu_3.mp3",
                description: "Ryu Ken"
            },
            "metralhadora": {
                url: "https://www.myinstants.com/media/sounds/pastor-metralhadora.mp3",
                description: "Pastor Metralhadora"
            },
            "cumano": {
                url: "https://www.myinstants.com/media/sounds/vai-da-o-cu-mano_5E69M5L.mp3",
                description: "Cumano"
            },
            "leno": {
                url: "https://www.myinstants.com/media/sounds/leno0-bregaaa.mp3",
                description: "Leno"
            },
            "leno2": {
                url: "https://www.myinstants.com/media/sounds/leno-brega.mp3",
                description: "Leno"
            },
            "balada": {
                url: "https://www.myinstants.com/media/sounds/tiririca-bom-negocio-vamo-pra-balada.mp3",
                description: "Balada"
            },
            "chines-reclamando": {
                url: "https://www.myinstants.com/media/sounds/chines-reclamando-do-empregado.mp3",
                description: "Chines Reclamando"
            },
            "bluetooth-connected": {
                url: "https://www.myinstants.com/media/sounds/bluetooth-connected-succesfully-high-quality.mp3",
                description: "Bluetooth Conectado"
            },
            "cariani1": {
                url: "https://www.myinstants.com/media/sounds/eu-quero-eu-posso.mp3",
                description: "Cariani - eu quero eu posso"
            },
            "merendar": {
                url: "https://www.myinstants.com/media/sounds/tiririca-au-gostaria-de-merendar.mp3",
                description: "Tiririca - Au, gostaria de merendar"
            },
            "diddy": {
                url: "https://www.myinstants.com/media/sounds/foi-o-pi-diddy.mp3",
                description: "foi o pi diddy"
            },
            "cavalo": {
                url: "https://www.myinstants.com/media/sounds/cavalo-ratinho.mp3",
                description: "Cavalo Ratinho"
            },
            "replay": {
                url: "https://www.myinstants.com/media/sounds/pica01.mp3",
                description: "Replay"
            },
            "obg-amigo": {
                url: "https://www.myinstants.com/media/sounds/obrigado-amigo-voce-e-um-amigo.mp3'",
                description: "Obrigado amigo, você é um amigo"
            },
            "bolinha-golfe": {
                url: "https://www.myinstants.com/media/sounds/pica-pau-bolinha-de-golfe.mp3",
                description: "Bolinha de Golfe"
            }
        };
    }

    SNAudio.prototype.getDocument = function () {
        return typeof snuGetDocument === "function"
            ? snuGetDocument()
            : document;
    };

    SNAudio.prototype.notify = function (message, type) {
        if (typeof snuShowAlert === "function") {
            snuShowAlert(message, type || "info");
        } else {
            alert(message);
        }
    };

    SNAudio.prototype.play = function (name) {
        name = (name || "").trim().toLowerCase();

        var selected = this.commands[name];

        if (!selected) {
            this.notify(
                "Comando não encontrado: " + (name || "(vazio)") +
                "\n\nUse /play list para consultar os comandos disponíveis.",
                "warning"
            );
            return;
        }

        var doc = this.getDocument();
        var audio = doc.getElementById(this.audioId);

        if (!audio) {
            audio = doc.createElement("audio");
            audio.id = this.audioId;
            audio.preload = "auto";
            doc.body.appendChild(audio);
        }

        audio.pause();
        audio.currentTime = 0;
        audio.src = selected.url;
        audio.load();

        var playback = audio.play();

        if (playback && typeof playback.catch === "function") {
            playback.catch(function (error) {
                console.error("Erro ao reproduzir áudio:", error);
                this.notify(
                    "Não foi possível reproduzir o áudio.",
                    "warning"
                );
            }.bind(this));
        }
    };

    SNAudio.prototype.list = function () {
        var doc = this.getDocument();
        var self = this;
        var oldModal = doc.getElementById(this.modalId);

        if (oldModal && oldModal.parentNode) {
            oldModal.parentNode.removeChild(oldModal);
        }

        this.addStyles(doc);

        var overlay = doc.createElement("div");
        overlay.id = this.modalId;

        var modal = doc.createElement("div");
        modal.className = "play-modal";

        var header = doc.createElement("div");
        header.className = "play-header";

        var titleContainer = doc.createElement("div");

        var title = doc.createElement("h2");
        title.className = "play-title";
        title.textContent = "Biblioteca de áudios";

        var subtitle = doc.createElement("p");
        subtitle.className = "play-subtitle";
        subtitle.textContent =
            "Consulte os comandos disponíveis e reproduza um áudio.";

        titleContainer.appendChild(title);
        titleContainer.appendChild(subtitle);

        var close = doc.createElement("button");
        close.className = "play-close";
        close.type = "button";
        close.textContent = "\u00D7";
        close.title = "Fechar";

        close.onclick = function () {
            self.close();
        };

        header.appendChild(titleContainer);
        header.appendChild(close);

        var content = doc.createElement("div");
        content.className = "play-content";

        var table = doc.createElement("table");
        var thead = doc.createElement("thead");
        var headerRow = doc.createElement("tr");

        ["Comando", "Descrição", "Ação"].forEach(function (label) {
            var th = doc.createElement("th");
            th.textContent = label;
            headerRow.appendChild(th);
        });

        thead.appendChild(headerRow);
        table.appendChild(thead);

        var tbody = doc.createElement("tbody");
        var names = Object.keys(this.commands);

        names.forEach(function (name) {
            var item = self.commands[name];
            var row = doc.createElement("tr");

            var commandCell = doc.createElement("td");
            var command = doc.createElement("span");
            command.className = "play-command";
            command.textContent = "/play " + name;
            commandCell.appendChild(command);

            var descriptionCell = doc.createElement("td");
            descriptionCell.textContent = item.description;

            var actionCell = doc.createElement("td");
            var button = doc.createElement("button");
            button.type = "button";
            button.className = "play-button";
            button.textContent = "\u25B6 Reproduzir";

            button.onclick = function () {
                self.play(name);
            };

            actionCell.appendChild(button);
            row.appendChild(commandCell);
            row.appendChild(descriptionCell);
            row.appendChild(actionCell);
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        content.appendChild(table);

        var footer = doc.createElement("div");
        footer.className = "play-footer";

        var count = doc.createElement("span");
        count.textContent = names.length + " áudio(s) disponível(is)";

        var tip = doc.createElement("span");
        tip.textContent = "Clique fora ou em × para fechar.";

        footer.appendChild(count);
        footer.appendChild(tip);

        modal.appendChild(header);
        modal.appendChild(content);
        modal.appendChild(footer);
        overlay.appendChild(modal);

        overlay.onclick = function (event) {
            if (event.target === overlay) {
                self.close();
            }
        };

        doc.body.appendChild(overlay);
    };

    SNAudio.prototype.close = function () {
        var doc = this.getDocument();
        var modal = doc.getElementById(this.modalId);

        if (modal && modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    };

    SNAudio.prototype.addStyles = function (doc) {
        if (doc.getElementById(this.styleId)) {
            return;
        }

        var style = doc.createElement("style");
        style.id = this.styleId;

        style.textContent =
            "#" + this.modalId + "{" +
            "position:fixed;inset:0;z-index:2147483647;" +
            "display:flex;align-items:center;justify-content:center;" +
            "padding:20px;background:rgba(15,23,42,.65);" +
            "font-family:Arial,sans-serif;box-sizing:border-box;" +
            "}" +
            "#" + this.modalId + " *{box-sizing:border-box;}" +
            "#" + this.modalId + " .play-modal{" +
            "width:100%;max-width:720px;max-height:85vh;overflow:auto;" +
            "background:#fff;border-radius:12px;" +
            "box-shadow:0 20px 60px rgba(0,0,0,.3);color:#1f2937;" +
            "}" +
            "#" + this.modalId + " .play-header{" +
            "display:flex;align-items:center;justify-content:space-between;" +
            "gap:16px;padding:20px 24px;border-bottom:1px solid #e5e7eb;" +
            "}" +
            "#" + this.modalId + " .play-title{" +
            "margin:0;font-size:20px;font-weight:700;" +
            "}" +
            "#" + this.modalId + " .play-subtitle{" +
            "margin:6px 0 0;font-size:13px;color:#6b7280;" +
            "}" +
            "#" + this.modalId + " .play-close{" +
            "border:0;background:transparent;color:#6b7280;" +
            "font-size:28px;cursor:pointer;line-height:1;padding:0 4px;" +
            "}" +
            "#" + this.modalId + " .play-content{padding:20px 24px;}" +
            "#" + this.modalId + " table{" +
            "width:100%;border-collapse:collapse;font-size:14px;" +
            "}" +
            "#" + this.modalId + " th{" +
            "background:#f8fafc;color:#64748b;font-weight:600;" +
            "text-align:left;font-size:12px;text-transform:uppercase;" +
            "}" +
            "#" + this.modalId + " th,#" + this.modalId + " td{" +
            "padding:13px 12px;border-bottom:1px solid #e5e7eb;" +
            "vertical-align:middle;" +
            "}" +
            "#" + this.modalId + " tbody tr:hover{background:#f8fafc;}" +
            "#" + this.modalId + " .play-command{" +
            "font-family:monospace;font-size:13px;color:#5e4e9b;" +
            "font-weight:600;white-space:nowrap;" +
            "}" +
            "#" + this.modalId + " .play-button{" +
            "border:0;border-radius:6px;padding:8px 12px;" +
            "background:#5e4e9b;color:#fff;font-size:12px;" +
            "font-weight:600;cursor:pointer;white-space:nowrap;" +
            "}" +
            "#" + this.modalId + " .play-button:hover{background:#493a80;}" +
            "#" + this.modalId + " .play-footer{" +
            "padding:14px 24px;border-top:1px solid #e5e7eb;" +
            "display:flex;justify-content:space-between;align-items:center;" +
            "gap:12px;color:#6b7280;font-size:12px;" +
            "}" +
            "@media(max-width:520px){" +
            "#" + this.modalId + "{padding:10px;}" +
            "#" + this.modalId + " .play-header," +
            "#" + this.modalId + " .play-content{padding:16px;}" +
            "#" + this.modalId + " th,#" + this.modalId + " td{" +
            "padding:10px 6px;" +
            "}" +
            "#" + this.modalId + " .play-command{" +
            "white-space:normal;overflow-wrap:anywhere;" +
            "}" +
            "#" + this.modalId + " .play-footer{padding:12px 16px;}" +
            "}";

        doc.head.appendChild(style);
    };

    // Disponibiliza a classe global.
    global.SNAudio = SNAudio;

})(typeof window !== "undefined" ? window : this);
