import { useGetAllBooksQuery } from "../generated/graphql"

export const useFetchBooks = () => {
    const {data, loading, error } = useGetAllBooksQuery({
        fetchPolicy: "no-cache",
        notifyOnNetworkStatusChange: true,
    })

    return { data, loading, error }
}