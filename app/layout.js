import "./globals.css";
import Sidebar from "@/components/layoutComponents/Sidebar";
import FollowBar2 from "@/components/layoutComponents/FollowBar2";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import Wrapper from "@/components/Wrapper";
import Provider from "@/components/Provider";
import EditModal from "@/components/modals/editModal";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Wrapper>
            <ReactQueryDevtools />
            <RegisterModal />
            <LoginModal />
            <EditModal />
            <div className="h-screen bg-black">
              <div className="xl:px-30 container mx-auto h-full max-w-6xl">
                <div className="grid h-full grid-cols-4">
                  <Sidebar />
                  <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">
                    {children}
                  </div>
                  <FollowBar2 />
                </div>
              </div>
            </div>
          </Wrapper>
        </Provider>
      </body>
    </html>
  );
}
