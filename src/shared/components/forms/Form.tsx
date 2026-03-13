export default function Form({ children }: { children: React.ReactNode }) {
  return <form className="mt-10 space-y-3 p-5 shadow-2xl">{children}</form>;
}
