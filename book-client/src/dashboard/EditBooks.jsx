import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBooks = () => {
  const {id} = useParams();
  const{bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL} = useLoaderData();

   const bookCategories = [
    "Fiction", "Non-Fiction", "Mistery", "Programming", "Science Fiction","Fantasy","Horror",
    "Bibliography", "Autobiography", "History", "Self-help", "Memoir", "Business", 
    "Children Books", "Thriller", "Travel", "Religion", "Art and Design", "Zombies"
  ]

  const [selectedBookCategory , setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  }

  // handle book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;

    const updateBookObj = {
      bookTitle ,authorName ,imageURL ,category ,bookDescription ,bookPdfURL
    }

    //console.log(bookObj);
    // update book data
    fetch(`http://localhost:5000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      //console.log(data)
      alert("Book is updated successfully!!!")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1080px] flex-col flex-wrap gap-4">
      {/* First row */}
      {/* Book Title */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name="bookTitle" type="text" 
            placeholder="Book name" required defaultValue={bookTitle}/>
          </div>
          {/* Author name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name="authorName" type="text" 
            placeholder="Author name" required defaultValue={authorName}/>
          </div>
        </div>

        {/* Second row */}
        {/* Image URL */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput id="imageURL" name="imageURL" type="text" 
            placeholder="Book image URL" required defaultValue={imageURL}/>
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            
            <Select id='inputState' name='categoryName' className='w-full rounded' 
            value={selectedBookCategory} onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
            </Select>
          </div>
        </div>

        {/* bookDescription */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea className='w-full' id="bookDescription" name='bookDescription' rows={5} 
          placeholder="Write your book description..." required defaultValue={bookDescription}/>
        </div>

        {/* Book PDF link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPdfURL" name='bookPdfURL' type="text" 
          placeholder="Book Pdf URL" required defaultValue={bookPdfURL}/>
        </div>

        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>
  )
}

export default EditBooks