import type { ESLintConfig } from 'eslint-define-config'
import { defineConfig } from 'eslint-define-config'

import { RuleConfigSeverity } from './constants'

const config: ESLintConfig = defineConfig({
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react-hooks/recommended',
    '@antfu',
  ],
  plugins: [
    'eslint-plugin-simple-import-sort',
    'import-newlines',
    'unused-imports',
  ],
  rules: {
    'import-newlines/enforce': RuleConfigSeverity.Error,
    'max-len': [RuleConfigSeverity.Error, 120],
    'simple-import-sort/imports': RuleConfigSeverity.Error,
    'simple-import-sort/exports': RuleConfigSeverity.Error,
    'import/first': RuleConfigSeverity.Error,
    'import/newline-after-import': RuleConfigSeverity.Error,
    'import/no-duplicates': RuleConfigSeverity.Error,
    'unused-imports/no-unused-imports': RuleConfigSeverity.Error,
    'react-hooks/rules-of-hooks': RuleConfigSeverity.Error,
    'react-hooks/exhaustive-deps': RuleConfigSeverity.Waring,
    'indent': [RuleConfigSeverity.Error, 2],
    'complexity': [RuleConfigSeverity.Error, 5],
  },
  ignorePatterns: [
    '.devcontainer',
    '.vscode',
    'build',
    'dist',
  ],
})

export = config
