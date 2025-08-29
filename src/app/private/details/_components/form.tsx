// export function FFF(){
//   return (

//     <Form {...form}>
//     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
//       <FormField
//         control={form.control}
//         name="title"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Título</FormLabel>
//             <FormControl>
//               <Input {...field} className="bg-sidebar-accent" />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <FormField
//         control={form.control}
//         name="originalTitle"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Título Original</FormLabel>
//             <FormControl>
//               <Input {...field} className="bg-sidebar-accent" />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <FormField
//         control={form.control}
//         name="tagline"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Tagline</FormLabel>
//             <FormControl>
//               <Input {...field} className="bg-sidebar-accent" />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <FormField
//         control={form.control}
//         name="synopsis"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Sinopse</FormLabel>
//             <FormControl>
//               <textarea
//                 {...field}
//                 rows={4}
//                 className="flex w-full rounded-md border border-input bg-sidebar-accent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Poster Upload Section */}
//       <div className="space-y-2">
//         <Label>Poster do Filme</Label>
//         <div className="flex gap-2">
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) handleFileUpload(file, "poster");
//             }}
//             className="bg-sidebar-accent flex-1"
//           />
//           <Button
//             type="button"
//             variant="outline"
//             size="sm"
//             onClick={() =>
//               document
//                 .querySelector<HTMLInputElement>('input[type="file"]')
//                 ?.click()
//             }
//           >
//             {/* <Upload className="h-4 w-4" /> */}
//           </Button>
//         </div>
//         {posterPreview && (
//           <img
//             src={posterPreview}
//             alt="Preview"
//             className="w-20 h-28 object-cover rounded border"
//           />
//         )}
//       </div>

//       <FormField
//         control={form.control}
//         name="posterUrl"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>URL do Poster (opcional)</FormLabel>
//             <FormControl>
//               <Input
//                 {...field}
//                 className="bg-sidebar-accent"
//                 placeholder="https://..."
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Backdrop Upload Section */}
//       <div className="space-y-2">
//         <Label>Banner do Filme</Label>
//         <div className="flex gap-2">
//           <Input
//             type="file"
//             accept="image/*"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) handleFileUpload(file, "backdrop");
//             }}
//             className="bg-sidebar-accent flex-1"
//           />
//           <Button
//             type="button"
//             variant="outline"
//             size="sm"
//             onClick={() => {
//               const inputs =
//                 document.querySelectorAll<HTMLInputElement>(
//                   'input[type="file"]',
//                 );
//               inputs[1]?.click();
//             }}
//           >
//             <Upload className="h-4 w-4" />
//           </Button>
//         </div>
//         {backdropPreview && (
//           <img
//             src={backdropPreview}
//             alt="Preview"
//             className="w-32 h-20 object-cover rounded border"
//           />
//         )}
//       </div>

//       <FormField
//         control={form.control}
//         name="backdropUrl"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>URL do Banner (opcional)</FormLabel>
//             <FormControl>
//               <Input
//                 {...field}
//                 className="bg-sidebar-accent"
//                 placeholder="https://..."
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <div className="grid grid-cols-2 gap-4">
//         <FormField
//           control={form.control}
//           name="releaseDate"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Lançamento</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="duration"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Duração</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <FormField
//           control={form.control}
//           name="status"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Situação</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="language"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Idioma</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         <FormField
//           control={form.control}
//           name="budget"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Orçamento</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="revenue"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Receita</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="profit"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Lucro</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>

//       <div className="grid grid-cols-2 gap-4">
//         <FormField
//           control={form.control}
//           name="popularity"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Popularidade</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <FormField
//           control={form.control}
//           name="votes"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Votos</FormLabel>
//               <FormControl>
//                 <Input {...field} className="bg-sidebar-accent" />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//       </div>

//       <FormField
//         control={form.control}
//         name="genres"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Gêneros (separados por vírgula)</FormLabel>
//             <FormControl>
//               <Input
//                 {...field}
//                 value={field.value.join(", ")}
//                 onChange={(e) =>
//                   field.onChange(
//                     e.target.value.split(", ").map((g) => g.trim()),
//                   )
//                 }
//                 className="bg-sidebar-accent"
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       <div className="flex gap-2 pt-4">
//         <Button type="submit" className="flex-1">
//           Salvar
//         </Button>
//         <Button type="button" variant="outline" onClick={onClose}>
//           Cancelar
//         </Button>
//       </div>
//     </form>
//   </Form>
//   )
// }
