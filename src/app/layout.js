import "./global.css";
import 'swiper/css';
import 'swiper/css/pagination';


export const metadata = {
  title: "JsMaster",
  description: "This is Js Master App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main> {children}</main>
      </body>
    </html>
  );
}
