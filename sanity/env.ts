type AssertOptions = { 
  allowEmpty?: boolean; 
};

console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);

// Function to assert and validate environment variable values
function assertValue<T>(value: T | undefined, errorMessage: string, options?: AssertOptions): T {
  const { allowEmpty = false } = options || {};
  if (value === undefined || (!allowEmpty && value === '')) {
    throw new Error(errorMessage);
  }
  return value;
}

// Export configuration values
export const apiVersion = 
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-12-24';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing or invalid environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing or invalid environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);
