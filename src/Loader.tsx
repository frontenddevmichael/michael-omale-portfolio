import { Grid } from 'ldrs/react'
import 'ldrs/react/Grid.css'

export default function Loader() {
    return (
        // Default values shown
        <div className="Loader">
            <Grid
                size="60"
                speed="1.5"
                color="#818181ff"
            />
        </div>
    )
}