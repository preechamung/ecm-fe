import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineUser } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import tw from "tailwind-styled-components"

export default function Sidebar() {
    return (
        <SidebarContainer>
            <SectionMenu>
                <IconContainer>
                    <MenuIcon size='1.5rem' />
                </IconContainer>
                <IconContainer>
                    <SearchIcon size='1.5rem' />
                </IconContainer>
            </SectionMenu>

            <SectionMenu>
                <IconContainer>
                    <UserIcon size='1.5rem' />
                </IconContainer>
                <IconContainer>
                    <BagIcon size='1.5rem' />
                </IconContainer>
            </SectionMenu>
        </SidebarContainer>
    )
}

const SidebarContainer = tw.div`
    w-28 h-full bg-primary pt-14 pb-12 px-1 absolute flex flex-col justify-between
`

const SectionMenu = tw.div`flex flex-col gap-7 justify-center`

const IconContainer = tw.div`flex justify-center`

const MenuIcon = tw(GiHamburgerMenu)`
    hover:text-primary-50 hover:duration-300 cursor-pointer 
`

const SearchIcon = tw(BiSearch)`
    hover:text-primary-50 hover:duration-300 cursor-pointer
`

const UserIcon = tw(AiOutlineUser)`
    hover:text-primary-50 hover:duration-300 cursor-pointer
`

const BagIcon = tw(BsHandbag)`
    hover:text-primary-50 hover:duration-300 cursor-pointer
`