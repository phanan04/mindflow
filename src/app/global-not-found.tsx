import './globals.css'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: '404 - Không Tìm Thấy Trang',
  description: 'Trang bạn đang tìm kiếm không tồn tại.',
}
 
export default function GlobalNotFound() {
  return (
    <html lang="vi" className={inter.className}>
      <body>
        <h1>404 - Không Tìm Thấy Trang</h1>
        <p>Trang này không tồn tại.</p>
      </body>
    </html>
  )
}