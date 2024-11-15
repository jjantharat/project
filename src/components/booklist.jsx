import React, { useState } from 'react';

const BookList = () => {
  // State สำหรับจัดการรายการ
  const [books, setBooks] = useState([]);

  // State สำหรับจัดการข้อมูลใหม่
  const [newBook, setNewBook] = useState({ title: '', author: '', date: '' });
  const [editingBook, setEditingBook] = useState(null); // ใช้สำหรับจัดการการแก้ไข
  const [error, setError] = useState(''); // ใช้สำหรับแสดงข้อความผิดพลาด
  const [searchBook, setSearchBook] = useState('');

  // ฟังก์ชันสำหรับเพิ่มใหม่
  const handleAddBook = () => {
    if (!newBook.title || !newBook.author || !newBook.date) {
      setError('เพิ่มข้อมูลเนื้อหาและชื่อผู้บันทึก');
      return;
    }

    if (editingBook) {
      // แก้ไข
      setBooks(books.map(book =>
        book.id === editingBook.id ? { ...book, ...newBook } : book
      ));
      setEditingBook(null); // เคลียร์การแก้ไข
    } else {
      setBooks([...books, { id: books.length + 1, ...newBook }]);
    }

    setNewBook({ title: '', author: '', date: '' });
    setError('');
  };

  // ฟังก์ชันสำหรับลบ
  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // ฟังก์ชันสำหรับเริ่มแก้ไข
  const handleEditBooks = (book) => {
    setNewBook({ title: book.title, author: book.author, date: book.date });
    setEditingBook(book);
  };

  // ฟังก์ชันสำหรับค้นหา
  const filteredBook = books.filter(book =>
    book.title.toLowerCase().includes(searchBook.toLowerCase()) ||
    book.author.toLowerCase().includes(searchBook.toLowerCase()) ||
    book.date.toLowerCase().includes(searchBook.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">เนื้อหาที่เรียน</h1>

      {/* ค้นหาหนังสือ */}
      <div className="mb-6 flex justify-start">
        <input
          type="text"
          placeholder="ค้นหา..."
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 w-1/2 ml-auto"
        />
      </div>

      {/* แสดงข้อความผิดพลาด */}
      {error && <div className="bg-red-500 text-white p-2 mb-4 rounded">{error}</div>}

      {/* ตารางแสดงรายการ */}
      <table className="w-full bg-white shadow-md rounded-lg mb-6">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">ลำดับ</th>
            <th className='px-4 py-2 border-b'>วันที่ เดือน ปี</th>
            <th className="px-4 py-2 border-b">เนื้อหาที่เรียน</th>
            <th className="px-4 py-2 border-b">ชื่อ</th>
            <th className="px-4 py-2 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {filteredBook.map((book) => (
            <tr key={book.id}>
              <td className="px-4 py-2 border-b text-center">{book.id}</td>
              <td className="px-4 py-2 border-b">{book.date}</td>
              <td className="px-4 py-2 border-b">{book.title}</td>
              <td className="px-4 py-2 border-b">{book.author}</td>
              <td className="px-4 py-2 border-b text-center">
                <button
                  onClick={() => handleEditBooks(book)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-700 mr-2"
                >
                  แก้ไข
                </button>
                <button
                  onClick={() => handleDeleteBook(book.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-700"
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ฟอร์มเพิ่มหรือแก้ไข */}
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4">{editingBook ? 'แก้ไขเนื้อหา' : 'เพิ่มข้อมูลเนื้อหาใหม่'}</h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="ตัวอย่าง 11/12/2024"
            value={newBook.date}
            onChange={(e) => setNewBook({ ...newBook, date: e.target.value })}
            className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="เนื้อหา"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            type="text"
            placeholder="ชื่อ"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            className="w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <button
          onClick={handleAddBook}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {editingBook ? 'บันทึก' : 'เพิ่มเนื้อหา'}
        </button>
      </div>
    </div>
  );
};

export default BookList;