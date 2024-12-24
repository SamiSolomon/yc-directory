import {defineField, defineType} from 'sanity'; 
import {UserIcon } from "lucide-react";

export const author = defineType({
  name: 'author', 
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'id',
      type: 'number',
    }),
    defineField({
      name: 'authorName', 
      type: 'string',
    }),
    defineField({
      name: 'username',
      type: 'string',
    }),
    defineField({
      name: "image",
      type: "url",
    }),
    defineField({
      name: "bio",
      type: "text",
    }),
  ],
  preview: {
    select: {
      title:"authorName", 
    }
  }
});