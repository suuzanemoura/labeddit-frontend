import { useProtectedPage } from "../../hooks/useProtectedPage"

export default function Posts() {
    useProtectedPage()
    return (
      <h1 className="text-3xl font-bold underline decoration-pink-500 text-center">
        Posts
      </h1>
    )
}