import React from 'react'
import "./../assets/css/style_fallback.css"

const ErrorFallback = () => {
    return (
        <div class="main-error-page">
        <h1 class="error-title">500</h1>
        <h2 class="error-title">
          Oops! Algo salió mal 😦
        </h2>
        <h2 class="error-subtitle">
        Espera unos minutos y vuelve a
        </h2>
      </div>
    )
}

export default ErrorFallback