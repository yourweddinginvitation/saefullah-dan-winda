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
    const imageUrl = `${url.origin}/images/og-hero.jpg`;
    const imageType = "image/jpeg";

    // Ambil resource sesuai path request (jangan selalu "/")
    const res = await env.ASSETS.fetch(request);
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return res;

    let html = await res.text();
    // Hapus tag OG/Twitter lama lalu sisipkan tag baru agar override pasti konsisten
    html = html
      .replace(/<meta\s+property="og:[^"]*"\s+content="[^"]*"\s*\/?>/gi, "")
      .replace(/<meta\s+name="twitter:[^"]*"\s+content="[^"]*"\s*\/?>/gi, "");

    const dynamicMeta = [
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="Undangan Pernikahan" />`,
      `<meta property="og:title" content="${title}" />`,
      `<meta property="og:description" content="${desc}" />`,
      `<meta property="og:url" content="${canonicalUrl}" />`,
      `<meta property="og:image" content="${imageUrl}" />`,
      `<meta property="og:image:secure_url" content="${imageUrl}" />`,
      `<meta property="og:image:type" content="${imageType}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:title" content="${title}" />`,
      `<meta name="twitter:description" content="${desc}" />`,
      `<meta name="twitter:image" content="${imageUrl}" />`
    ].join("\n    ");

    html = html.replace("</head>", `    ${dynamicMeta}\n  </head>`);

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8",
        "x-debug-to": toRaw,
        "x-debug-og-url": canonicalUrl
      },
      status: 200
    });
  }
};




