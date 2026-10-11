<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the single-page portfolio and anchor navigation in the index route; all portfolio content belongs to one cohesive experience.
- Keep reusable pull-cord lamp presentation in its own component and reveal state in the page; this separates visual mechanics from page access.
- Use global semantic design tokens and portfolio Button variants for all presentation; this keeps the glass theme and interactive controls consistent.
- Keep public portfolio facts static and avoid inventing project work or credential verification links; no backend is needed for a public profile.
