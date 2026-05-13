export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const toRaw = url.searchParams.get("to") || "Bapak/Ibu/Saudara/i";
    const to = toRaw.replace(/[<>]/g, "").trim();
    const escapeHtmlAttr = (value) => value
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    const safeTo = escapeHtmlAttr(to);
    const desc = `Kepada ${safeTo}, kami mengundang Anda untuk melihat detail acara. Terima kasih.`;
    const title = "Pernikahan Saefullah & Winda";
    const canonicalUrl = `${url.origin}/?to=${encodeURIComponent(toRaw)}`;
    const imageUrl = `${url.origin}/images/og-hero.jpg?v=20260513`;
    const imageType = "image/jpeg";

    // Ambil resource sesuai path request (jangan selalu "/")
    const res = await env.ASSETS.fetch(request);
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return res;

    let html = await res.text();
    const upsertMeta = (source, pattern, replacement) => {
      if (pattern.test(source)) return source.replace(pattern, replacement);
      return source.replace("</head>", `  ${replacement}\n  </head>`);
    };

    // Timpa meta OG/Twitter agar crawler (WA/FB) dapat preview kartu
    html = upsertMeta(
      html,
      /<meta property="og:title" content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${title}" />`
    );
    html = upsertMeta(
      html,
      /<meta property="og:description" content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${desc}" />`
    );
    html = upsertMeta(
      html,
      /<meta property="og:url" content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${canonicalUrl}" />`
    );
    html = upsertMeta(
      html,
      /<meta property="og:image" content="[^"]*"\s*\/?>/i,
      `<meta property="og:image" content="${imageUrl}" />`
    );
    html = upsertMeta(
      html,
      /<meta property="og:image:secure_url" content="[^"]*"\s*\/?>/i,
      `<meta property="og:image:secure_url" content="${imageUrl}" />`
    );
    html = upsertMeta(
      html,
      /<meta property="og:image:type" content="[^"]*"\s*\/?>/i,
      `<meta property="og:image:type" content="${imageType}" />`
    );
    html = upsertMeta(
      html,
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${title}" />`
    );
    html = upsertMeta(
      html,
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${desc}" />`
    );
    html = upsertMeta(
      html,
      /<meta name="twitter:image" content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:image" content="${imageUrl}" />`
    );

    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
      status: 200
    });
  }
};



