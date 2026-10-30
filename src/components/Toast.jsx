import { AnimatePresence, motion } from "framer-motion";
import { useShop } from "../context/ShopContext.jsx";

export default function Toast() {
  const { toast } = useShop();
  return (
    <div className="toast-wrap" aria-live="polite">
      <AnimatePresence>
        {toast && (
          <motion.div key={toast.id} className={`nx-toast ${toast.type}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
