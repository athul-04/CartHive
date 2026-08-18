
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
const SearchBar=()=>{
    return(
        <>
        <div>
            <InputGroup className="w-full has-[[data-slot=input-group-control]:focus-visible]:border-brand-primary has-[[data-slot=input-group-control]:focus-visible]:ring-brand-primary/50">
                <InputGroupInput placeholder="Type to search..." />
                <InputGroupAddon align="inline-end">
                <InputGroupButton variant="secondary" className="bg-brand-primary text-white hover:bg-brand-primary/90">Search</InputGroupButton>
                </InputGroupAddon>
            </InputGroup>
        </div>

        </>
    )
}

export default SearchBar;

