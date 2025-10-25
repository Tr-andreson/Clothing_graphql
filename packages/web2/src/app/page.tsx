// import { HomePage } from "../components/module/home";

// import { HomeModule } from "@/application/module/home";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h4>Home Page</h4>
      <Button>

        <Link href="/login">Login</Link>
      </Button>
      {/* <HomeModule /> */}
      {/* <HomePage /> */}
    </div>
  );
}
