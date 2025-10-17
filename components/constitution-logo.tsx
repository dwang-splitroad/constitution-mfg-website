import React from 'react'

interface ConstitutionLogoProps {
  className?: string
}

export function ConstitutionLogo({ className = '' }: ConstitutionLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 50"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="10" y="35" fontSize="24" fontWeight="bold" fontFamily="Arial, sans-serif">
        Constitution MFG
      </text>
    </svg>
  )
}
