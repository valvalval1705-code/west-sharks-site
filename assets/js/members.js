function createMemberCard(member) {
    if (
        !member ||
        typeof member.nome !== "string" ||
        typeof member.funcao !== "string" ||
        typeof member.descricao !== "string" ||
        typeof member.imagem !== "string"
    ) {
        throw new TypeError("Dados inválidos para um integrante.");
    }

    const article = document.createElement("article");
    article.className = "integrante";

    const image = document.createElement("img");
    image.src = member.imagem;
    image.alt = member.nome;
    image.loading = "lazy";

    const info = document.createElement("div");
    info.className = "integrante-info";

    const name = document.createElement("h3");
    name.className = "name";
    name.textContent = member.nome;

    const role = document.createElement("h5");
    role.className = "role";
    role.textContent = member.funcao;

    const description = document.createElement("p");
    description.className = "member_description";
    description.textContent = member.descricao;

    info.append(name, role, description);
    article.append(image, info);

    return article;
}

async function loadMembers() {
    const gallery = document.querySelector(".galeria-integrantes");

    if (!gallery) {
        console.error("A galeria de integrantes não foi encontrada.");
        return;
    }

    try {
        const response = await fetch("../assets/data/members.json");
        if (!response.ok) {
            throw new Error(`Falha ao carregar members.json: HTTP ${response.status}`);
        }

        const members = await response.json();
        if (!Array.isArray(members)) {
            throw new TypeError("members.json deve conter uma lista de integrantes.");
        }

        gallery.replaceChildren(...members.map(createMemberCard));
    } catch (error) {
        console.error("Não foi possível carregar os integrantes.", error);
        gallery.textContent = "Não foi possível carregar os integrantes.";
    }
}

loadMembers();
