import { TruckIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon } from '@heroicons/react/solid'
import { GlobeAltIcon } from '@heroicons/react/solid'
import { ArchiveIcon } from '@heroicons/react/solid'
export const statsData = [
    {
        id: 1,
        heading: "2000+",
        paragraph: "Deliveries",
        src: <TruckIcon className='w-10 text-red-700 transform translate-x-[-4.5px]' />
    },
    {
        id: 2,
        heading: "900+",
        paragraph: "Happy Clients",
        src: <EmojiHappyIcon className='w-10 text-red-700 transform translate-x-[-4.5px]' />
    },
    {
        id: 3,
        heading: "30000+",
        paragraph: "Kilometres traveled",
        src: <GlobeAltIcon className='w-10 text-red-700 transform translate-x-[-4.5px]' />
    },
    {
        id: 4,
        heading: "5000+",
        paragraph: "Packages Stored",
        src: <ArchiveIcon className='w-10 text-red-700 transform translate-x-[-4.5px]' />
    }

]  