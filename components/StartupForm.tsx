"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor';
import { Button } from './ui/button';
import { Send } from 'lucide-react';

const StartupForm = () => {

  const [errors, setErrors] = useState({})
  const [value, setValue] = useState("**Hello world!!!**");
  const [pitch, setPitch] = useState("")
  const [title, setTitle] = useState('')
  const [link, setlink] = useState('')

  const [description, setDescription] = useState({})
  
  const isPending = false


  return (
    <>
      <form action={() => {}} className="startup-form">
  <div>
    <label htmlFor="title" className="startup_form_label">
      Title
    </label>
    <Input
      id="title"
      name="title"
      className="startup-form_input"
      required
      placeholder="Startup Title"
    />
          {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>
        
        <div>
    <label htmlFor="title" className="startup_form_label">
      Title
    </label>
    <Input
      id="title"
      name="title"
      className="startup-form_input"
      required
      placeholder="Startup Title"
    />
          {errors.title && <p className="startup-form_error">{errors.title}</p>}
        </div>
        
        <div>
    <label htmlFor="description" className="startup_form_label">
      description
    </label>
    <Textarea
      id="description"
      name="description"
      className="startup-form_textarea"
      required
      placeholder="Startup Title"
    />
          {errors.description && <p className="startup-form_error">{errors.description}</p>}
        </div>
        
        <div>
    <label htmlFor="category" className="startup_form_label">
      Category
    </label>
    <Input
      id="category"
      name="category"
      className="startup-form_input"
      required
      placeholder="Startup Category(Tech, Health, Education)"
    />
          {errors.category && <p className="startup-form_error">{errors.category}</p>}
        </div>
    
        <div>
    <label htmlFor="link" className="startup_form_label">
      Image URL
    </label>
    <Input
      id="Link"
      name="Link"
      className="startup-form_input"
      required
      placeholder="Startup Image URL"
    />
          {errors.link && <p className="startup-form_error">{errors.link}</p>}
  </div>
        
  <div data-color-mode="light">
    <label htmlFor="pitch" className="startup_form_label">
      Pitch
    </label>
    <MDEditor
        value={value}
            onChange={(value) => setPitch(value as string)}
            id='pitch'
            preview='edit'
            height={300}
            style={{ borderRadius: 20, overflow: "hidden" }}
            textareaProps={{
              placeholder: 'Briefly describe your idea and what problem it solves',
            }}
            previewOptions={{
              disallowedElements:['style']
            }}
      />
          {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
        </div>
        

        <Button
  type="submit"
  className="startup-form_btn text-white"
  disabled={isPending}
>
  {isPending ? "Submitting ..." : "Submit Your Pitch"}
  <Send className="size-6 ml-2" />
</Button>
        
</form>
    </>
  )
}

export default StartupForm
