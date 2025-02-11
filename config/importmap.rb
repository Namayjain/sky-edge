# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "tailwindcss" # @4.0.3
pin "main"
# pin "swiper", to: "swiper-bundle.min.js"
# pin "wow.js", to: "wow.js"
pin "index", to: "index.js"
# pin "wowjs" # @1.1.3
