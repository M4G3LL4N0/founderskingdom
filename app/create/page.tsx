import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function CreatePage() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setLoading(true);
    // In a real app, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gray-200 h-16" />
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Project Name</label>
              <input
                {...register('name', { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Project name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Stage</label>
              <select
                {...register('stage', { required: true })}
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              >
                <option value="idea">Idea</option>
                <option value="prototype">Prototype</option>
                <option value="development">Development</option>
                <option value="launch">Launch</option>
              </select>
              {errors.stage && <p className="text-red-500 text-sm">{errors.stage.message}</p>}
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Creating...' : 'Create Project'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
