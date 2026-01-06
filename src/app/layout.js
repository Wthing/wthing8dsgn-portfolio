import "./globals.css";

export const metadata = {
    title: "3D Artist Portfolio",
    description: "3D • Automotive • Livery • Photorealism",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
        <body>{children}</body>
        </html>
    );
}
