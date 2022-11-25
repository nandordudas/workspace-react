import type { UserConfig } from '@commitlint/types'
import { RuleConfigSeverity } from '@commitlint/types'

export default {
  extends: '@commitlint/config-conventional',
  rules: {
    'references-empty': [RuleConfigSeverity.Error, 'never'],
  },
} as UserConfig
