import { Config } from "tailwindcss";

const config: Config = {
    content: [
        './src/components/**/*.{ts,tsx}',
        './src/pages/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {

            },


            backgroundImage: {

                "image": "url('./src/assets/images/login.webp')"
            }
        }
    },
    plugins: [],
    darkMode: "class"
}

export default config;