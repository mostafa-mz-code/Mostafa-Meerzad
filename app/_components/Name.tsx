import { motion } from "framer-motion";
import Link from "next/link";

const Name = () => {
  return (
    <Link href={"/"}>
      <motion.p
        className="leading-7 [&:not(:first-child)]:mt-6 font-courier text-muted-foreground"
        whileHover={{ scale: 1.2 }}
      >
        MM
      </motion.p>
    </Link>
  );
};
export default Name;
