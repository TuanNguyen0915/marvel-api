import Form from "next/form"
import { Button } from "./ui/button"
import SearchFormReset from "./SearchFormReset"

const Search = () => {
  return (
    <div className="flex w-full items-center justify-center max-md:flex-col">
      <Form
        action={"/search"}
        className="flex w-full flex-col items-center justify-between gap-4"
        id="search-form"
      >
        <div className="flex w-80 items-center justify-center rounded-xl bg-white">
          <input
            name="query"
            placeholder="ENTER CHARACTER NAME"
            className="w-64 bg-white bg-none p-4 text-2xl placeholder:text-xl placeholder:text-gray-400 focus-within:outline-none focus:border-none focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-4">
          <Button
            type="submit"
            className="bg-yellow-400 text-xl font-bold uppercase tracking-wide text-black transition-all hover:brightness-125 hover:drop-shadow-lg md:text-2xl"
          >
            get character data
          </Button>
          <SearchFormReset />
        </div>
      </Form>
    </div>
  )
}

export default Search
