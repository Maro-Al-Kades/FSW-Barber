import Link from "next/link";
import { Card, CardContent } from "./ui/card";

export default function Footer() {
  return (
    <footer>
      <Card className="min-w-full rounded-lg border-none">
        <CardContent className="flex flex-row items-center justify-between px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2025 Copyright <span className="font-bold">FSW Barber</span>
          </p>

          <p className="text-sm text-gray-400">
            Developed By{" "}
            <Link
              href={`https://xmaro.vercel.app`}
              target="_blank"
              className="font-bold text-primary"
            >
              Maro Asam
            </Link>
          </p>
        </CardContent>
      </Card>
    </footer>
  );
}
