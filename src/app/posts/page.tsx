import Link from "next/link";

export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface ResponseProps {
  posts: PostProps[];
}

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  async function handleFetchPosts() {
    "use server";
    const response = await fetch("https://dummyjson.com/posts");
    const data: ResponseProps = await response.json();

    console.log(data.posts);
  }
  async function handlerSearchUsers(formData: FormData) {
    "use server";

    const userID = formData.get("userID");


    const response = await fetch(`https://dummyjson.com/posts/user/${userID} `);
    const data: ResponseProps = await response.json();


    console.log(data);
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-3 font-bold text-2xl">
        Todos os Posts
      </h1>

      <form className="flex gap-2 my-4" action={handlerSearchUsers}>
        <input
          type="text"
          placeholder="Id do usuário"
          className="border border-gray-200 p-1"
          name="userID"
        />

        <button
          className="bg-blue-500 text-white p-1 rounded-sm"
          type="submit"
          onClick={handleFetchPosts}
        >
          Buscar posts
        </button>
      </form>

      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <div key={post.id} className="bg-amber-100 rounded-md p-4">
            <h2 className="text-sky-500 font-bold">{post.title}</h2>
            <p> {post.body}</p>
            <Link className="text-blue-400" href={`/posts/${post.id}`}>
            Ver detalhes do post
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
