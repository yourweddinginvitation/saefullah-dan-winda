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

    // Ambil halaman dari static assets (hasil build Vite)
    const res = await env.ASSETS.fetch(new Request(new URL("/", url), request));
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return res;

    let html = await res.text();

    // Timpa meta OG/Twitter description
    html = html.replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${desc}" />`
    );
    html = html.replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${desc}" />`
    );

    return new Response(html, {
      headers: { "content-type": "text/html; charset=UTF-8" },
      status: 200
    });
  }
};
