import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="shadow-lg rounded-lg p-8 mb-8 pb-12 ">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map((category) => (
        <Link passHref key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer text-slate-500 hover:text-indigo-900 block font-semibold pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
      <Link passHref key="jobs" href="/items/jobs">
        <span className="cursor-pointer text-slate-500 hover:text-indigo-900 block font-semibold pb-3 mb-3">
          Jobs
        </span>
      </Link>
      <Link passHref key="scholarship" href="/items/scholarships">
        <span className="cursor-pointer text-slate-500 hover:text-indigo-900 block font-semibold pb-3 mb-3">
          Scholarships
        </span>
      </Link>
      <Link passHref key="intern" href="/items/internships">
        <span className="cursor-pointer text-slate-500 hover:text-indigo-900 block font-semibold pb-3 mb-3">
          Internships
        </span>
      </Link>
    </div>
  );
};

export default Categories;
