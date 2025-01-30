window.onload = function() {
  // Инициализация Swagger UI с вашим JSON-файлом
  window.ui = SwaggerUIBundle({
    url: "./swagger.json",  // Укажите путь к вашему swagger.json
    dom_id: "#swagger-ui",
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });
};