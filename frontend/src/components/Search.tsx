

interface SearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}
function SearchColors ({ searchQuery,setSearchQuery }: SearchProps){

    return(
        <>
            <div className="md:w-[320px]">
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 me-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}
                            type="search" id="default-search"
                           className="block w-full px-[36px] py-[11px] rounded-lg text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-50"
                           placeholder="Search by name or HEX..." />
                </div>
            </div>
        </>
    )
}

export default SearchColors
