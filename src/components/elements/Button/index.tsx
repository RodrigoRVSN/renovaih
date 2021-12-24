import { signIn, signOut, useSession } from 'next-auth/react';

export function Button(): JSX.Element {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          className="h-10 px-6 font-semibold rounded-md bg-black text-white"
          type="button"
          onClick={() => signOut()}
        >
          Sair
        </button>
      </>
    );
  }

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-black text-white"
      type="button"
      onClick={() => signIn()}
    >
      Entrar
    </button>
  );
}
