"use client"
import Link from "next/link"
import * as Nav from '@radix-ui/react-navigation-menu'
import { motion } from 'framer-motion'
import { ROUTES } from "./constants/routes"

export const Navbar = () => {
  const links = [
    <Link href={ROUTES.home} children={<h2>Home</h2>} />,
    <Link href={ROUTES.bio} children={<h2>About</h2>} />,
    <Link href={ROUTES.booking} children={<h2>Booking</h2>} />,
    <Link href={ROUTES.lessons} children={<h2>Lessons</h2>} />,
    <Link href={ROUTES.reviews} children={<h2>Reviews</h2>} />,
    <Link href={ROUTES.contact} children={<h2>Contact</h2>} />,
  ]
  const NavItems = links.map(l => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: .8 }}
    >
      <Nav.Item className="list-none rounded-lg border-2 border-blue-900 py-1 px-3 bg-celadon-900/70 hover:bg-blue-500 text-xl font-sans">{l}</Nav.Item>
    </motion.div >
  ))

  return (
    <Nav.Root className="flex flex-col bg-celadon-500/40 text-blue-200 w-full h-1/6">
      <Link href={'/'} children={<h1>Tyler Hartley</h1>} className="text-center text-violet-500 font-script sm:text-7xl text-5xl p-2 " />
      <h2 className="text-center font-script text-3xl sm:text-5xl text-amaranth font-semibold">
        Atlanta Harpist
      </h2>
      <Nav.List className="flex flex-row justify-evenly flex-wrap p-2">
        {NavItems}
      </Nav.List>
    </Nav.Root>
  )
}

