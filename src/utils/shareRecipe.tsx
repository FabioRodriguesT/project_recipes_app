function shareRecipe(
  copied: boolean,
  set: React.Dispatch<React.SetStateAction<boolean>>,
  type?: string | null,
  id?: string | null
) {
  navigator.clipboard
    .writeText(generateUrl(type, id))
    .then(() => {
      set(!copied);

      setTimeout(() => {
        set(false);
      }, 3000);
    })
    .catch((err) => {
      console.error("Erro ao copiar o link: ", err);
    });
}

function generateUrl(type?: string | null, id?: string | null): string {
  const path = window.location.pathname.split("/")[1];
  const regex = new RegExp(`^(.+/${path}/\\d+)`);
  const match = window.location.href.match(regex);

  const typePath = `${type}s`;
  const locationPath = window.location.href.split("/").slice(0, -1).join("/");
  const generatedPath = `${locationPath}/${typePath}/${id}`;

  return match ? match[1] : generatedPath;
}

export default shareRecipe;
