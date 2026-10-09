! function () {
    var e = {
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
            description: "Paj\xe9"
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
    },
        t = "$0".trim().toLowerCase(),
        a = "function" == typeof snuGetDocument ? snuGetDocument() : document;

    function n(t) {
        var n = e[t];
        if (n) {
            var o = "snu-custom-audio-player",
                p = a.getElementById(o);
            p || ((p = a.createElement("audio")).id = o, p.preload = "auto", a.body.appendChild(p)), p.pause(), p.currentTime = 0, p.src = n.url, p.load();
            var i = p.play();
            i && "function" == typeof i.catch && i.catch(function (e) {
                console.error("Erro ao reproduzir \xe1udio:", e), "function" == typeof snuShowAlert && snuShowAlert("N\xe3o foi poss\xedvel reproduzir o \xe1udio.", "warning")
            })
        }
    }
    if ("list" === t) {
        ! function t() {
            var o = "snu-play-audio-modal",
                p = "snu-play-audio-modal-style",
                i = a.getElementById(o);
            if (i && i.parentNode.removeChild(i), !a.getElementById(p)) {
                var r = a.createElement("style");
                r.id = p, r.textContent = "#" + o + " {position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(15,23,42,.65);font-family:Arial,sans-serif;box-sizing:border-box;}#" + o + " * {box-sizing:border-box;}#" + o + " .play-modal {width:100%;max-width:720px;max-height:85vh;overflow:auto;background:#fff;border-radius:12px;box-shadow:0 20px 60px rgba(0,0,0,.3);color:#1f2937;}#" + o + " .play-header {display:flex;align-items:center;justify-content:space-between;gap:16px;padding:20px 24px;border-bottom:1px solid #e5e7eb;}#" + o + " .play-title {margin:0;font-size:20px;font-weight:700;}#" + o + " .play-subtitle {margin:6px 0 0;font-size:13px;color:#6b7280;}#" + o + " .play-close {border:0;background:transparent;color:#6b7280;font-size:28px;cursor:pointer;line-height:1;padding:0 4px;}#" + o + " .play-content {padding:20px 24px;}#" + o + " table {width:100%;border-collapse:collapse;font-size:14px;}#" + o + " th {background:#f8fafc;color:#64748b;font-weight:600;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.04em;}#" + o + " th,#" + o + " td {padding:13px 12px;border-bottom:1px solid #e5e7eb;vertical-align:middle;}#" + o + " tbody tr:hover {background:#f8fafc;}#" + o + " .play-command {font-family:monospace;font-size:13px;color:#5e4e9b;font-weight:600;white-space:nowrap;}#" + o + " .play-button {border:0;border-radius:6px;padding:8px 12px;background:#5e4e9b;color:#fff;font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;}#" + o + " .play-button:hover {background:#493a80;}#" + o + " .play-footer {padding:14px 24px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;gap:12px;color:#6b7280;font-size:12px;}@media(max-width:520px) {#" + o + " {padding:10px;}#" + o + " .play-header,#" + o + " .play-content {padding:16px;}#" + o + " th,#" + o + " td {padding:10px 6px;}#" + o + " .play-command {white-space:normal;overflow-wrap:anywhere;}#" + o + " .play-footer {padding:12px 16px;}}", a.head.appendChild(r)
            }
            var d = a.createElement("div");
            d.id = o;
            var l = a.createElement("div");
            l.className = "play-modal";
            var s = a.createElement("div");
            s.className = "play-header";
            var c = a.createElement("div"),
                m = a.createElement("h2");
            m.className = "play-title", m.textContent = "Biblioteca de \xe1udios";
            var u = a.createElement("p");
            u.className = "play-subtitle", u.textContent = "Consulte os comandos dispon\xedveis e reproduza um \xe1udio.", c.appendChild(m), c.appendChild(u);
            var h = a.createElement("button");
            h.className = "play-close", h.type = "button", h.textContent = "\xd7", h.title = "Fechar", h.setAttribute("aria-label", "Fechar modal"), h.onclick = function () {
                d.parentNode && d.parentNode.removeChild(d)
            }, s.appendChild(c), s.appendChild(h);
            var f = a.createElement("div");
            f.className = "play-content";
            var x = a.createElement("table"),
                b = a.createElement("thead"),
                y = a.createElement("tr");
            ["Comando", "Descri\xe7\xe3o", "A\xe7\xe3o"].forEach(function (e) {
                var t = a.createElement("th");
                t.textContent = e, y.appendChild(t)
            }), b.appendChild(y), x.appendChild(b);
            var g = a.createElement("tbody"),
                v = Object.keys(e);
            v.forEach(function (t) {
                var o = e[t],
                    p = a.createElement("tr"),
                    i = a.createElement("td"),
                    r = a.createElement("span");
                r.className = "play-command", r.textContent = "/play " + t, i.appendChild(r);
                var d = a.createElement("td");
                d.textContent = o.description;
                var l, s = a.createElement("td"),
                    c = a.createElement("button");
                c.type = "button", c.className = "play-button", c.textContent = "▶ Reproduzir", c.onclick = (l = t, function () {
                    n(l)
                }), s.appendChild(c), p.appendChild(i), p.appendChild(d), p.appendChild(s), g.appendChild(p)
            }), x.appendChild(g), f.appendChild(x);
            var C = a.createElement("div");
            C.className = "play-footer";
            var $ = a.createElement("span");
            $.textContent = v.length + " \xe1udio(s) dispon\xedvel(is)";
            var w = a.createElement("span");
            w.textContent = "ESC n\xe3o fecha o modal; use \xd7 ou clique fora.", C.appendChild($), C.appendChild(w), l.appendChild(s), l.appendChild(f), l.appendChild(C), d.appendChild(l), d.onclick = function (e) {
                e.target === d && d.parentNode && d.parentNode.removeChild(d)
            }, a.body.appendChild(d)
        }();
        return
    }
    if (e[t]) {
        n(t);
        return
    }
    var o = "Comando n\xe3o encontrado: " + (t || "(vazio)") + "\n\nUse /play list para consultar os comandos dispon\xedveis.";
    "function" == typeof snuShowAlert ? snuShowAlert(o, "warning") : alert(o)
}();